const searchIcon = document.querySelector(".search-icon");
const searchModal = document.querySelector(".search-modal");
const closeSearchModalBtn = document.querySelector(".close-search-modal-btn svg");

const hideModal = (event) => {
    searchModal.classList.remove("show-search-modal");
}

function changeTab(tabIndex) {
    // تمام تب‌ها و محتواها را غیرفعال می‌کنیم
    const allTabs = document.querySelectorAll('.tab-title');
    const allContents = document.querySelectorAll('.content');

    allTabs.forEach((tab, index) => {
        if (index === tabIndex) {
            tab.classList.add('active-tab-title');
        } else {
            tab.classList.remove('active-tab-title');
        }
    });

    allContents.forEach((content, index) => {
        if (index === tabIndex) {
            content.classList.add('content-active');
        } else {
            content.classList.remove('content-active');
        }
    });
}

searchIcon.addEventListener("click" , () => {
    searchModal.classList.add("show-search-modal")
})

closeSearchModalBtn.addEventListener("click" , hideModal);

// اضافه کردن رویداد کلیک به تب‌ها
document.addEventListener('DOMContentLoaded', function () {
    const tabContainers = document.querySelectorAll('.tab-title-container');

    tabContainers.forEach((container, index) => {
        container.addEventListener('click', function () {
            changeTab(index);
        });
    });
});