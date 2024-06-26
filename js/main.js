// メニューの切り替え（レスポンシブとPC）

const phoneMenu = document.querySelector(".phone-menu");
// const pcMenu = document.querySelector('.pc-menu');


//レスポンシブ--------------------------
//ハンバーガーメニュー--------------------

// ハンバーガーメニューの要素
const hamburgerMenu = document.querySelector(".hamburger-menu");
// ハンバーガーメニューがクリックされた時に表示されるメニュー画面の要素
const navi = document.getElementById("hamburger-navigation");
// ハンバーガーメニュー内の各セクションの要素
const hamburgerMenuSections = document.querySelectorAll(".hamburger-menu-section");
// ハンバーガーメニュー内の各メニューの要素
const headerMenuList = document.querySelectorAll(".header-menu");
// マスク
const mask = document.getElementById("mask");


// ハンバーガーメニューをクリックした時の処理
hamburgerMenu.addEventListener("click", function () {
	hamburgerMenu.classList.toggle("active");
	navi.classList.toggle("active");
	// mask.classList.toggle("active");
	hamburgerMenuSections.forEach((section) => {
		section.classList.toggle("active");
	});
});

headerMenuList.forEach((menuItem) => {
	menuItem.addEventListener("click", function () {
		hamburgerMenu.classList.toggle("active");
		navi.classList.toggle("active");
		mask.classList.toggle("active");
		hamburgerMenuSections.forEach((section) => {
			section.classList.toggle("active");
		});
	});
});
// ロゴ
// const logo = document.getElementById("header-logo")
document.addEventListener('DOMContentLoaded', () => {
    // 初期設定：hamburger-menuのopacityを0にする
    gsap.set('.phone-menu', { opacity: 0 });

    // ScrollTriggerの設定
    gsap.to('.phone-menu', {
      opacity: 1,
      scrollTrigger: {
        trigger: '.eventname',
        start: 'top center', // .eventnameが画面の中央に来たとき
        toggleActions: 'play none none reverse' // スクロールの動作に合わせてアニメーションを制御
      }
    });
  });



//   メインビジュアルのスクロールトリガー


document.addEventListener("DOMContentLoaded", function () {
	gsap.registerPlugin(ScrollTrigger);

	// メディアクエリの設定
	const mediaQuery = window.matchMedia("(max-width: 900px)");

	// メディアクエリが一致する場合にアニメーションを設定
	function handleMediaQueryChange(e) {
		if (e.matches) {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: ".catch--imgs",
					start: "top top",
					end: "bottom top",
					scrub: true,
				}
			});

			tl.fromTo(".mainvisual1", { x: "-100%" }, { x: "50%" })
			  .fromTo(".mainvisual3", { x: "100%" }, { x: "-50%" }, 0);
		} else {
			// アニメーションのリセットまたは他の処理
			gsap.killTweensOf(".mainvisual1");
			gsap.killTweensOf(".mainvisual3");
		}
	}

	// 初回チェック
	handleMediaQueryChange(mediaQuery);

	// リスナーの登録
	mediaQuery.addEventListener("change", handleMediaQueryChange);
});