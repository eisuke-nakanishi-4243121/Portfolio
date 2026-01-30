"use strict";

// ハンバーガーメニューを開閉する関数
function toggleMenu() {
    var menu = document.getElementById('nav-menu');
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
    } else {
        menu.classList.add('active');
    }
}

// メニューのリンクをクリックしたらメニューを閉じる
var menuLinks = document.querySelectorAll('#nav-menu a');
for (var i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', function () {
        var menu = document.getElementById('nav-menu');
        menu.classList.remove('active');
    });
}

// スムーズにスクロールする
var scrollLinks = document.querySelectorAll('a[href^="#"]');
for (var i = 0; i < scrollLinks.length; i++) {
    scrollLinks[i].addEventListener('click', function (e) {
        e.preventDefault();
        var targetId = this.getAttribute('href');
        var targetElement = document.querySelector(targetId);

        if (targetElement) {
            var targetPosition = targetElement.offsetTop - 80;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
}

// 画像が読み込めなかったときの処理
var workImages = document.querySelectorAll('.work-image img');
for (var i = 0; i < workImages.length; i++) {
    workImages[i].addEventListener('error', function () {
        this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="250"%3E%3Crect width="400" height="250" fill="%23F2EAD3"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%23344F1F"%3ENo Image%3C/text%3E%3C/svg%3E';
    });
}

// 画像スライドショー（何枚でも対応）
function initSlideshow() {
    var slideshows = document.querySelectorAll('.image-slideshow');

    slideshows.forEach(function(slideshow) {
        var images = slideshow.querySelectorAll('img');
        if (images.length === 0) return;

        var current = 0;
        images[0].classList.add('active');

        setInterval(function() {
            images[current].classList.remove('active');
            current = (current + 1) % images.length;
            images[current].classList.add('active');
        }, 3000);
    });
}

initSlideshow();
