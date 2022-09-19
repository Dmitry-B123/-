document.addEventListener('DOMContentLoaded', function () {
   document.querySelectorAll('.section-work__step').forEach(function (tabsBtn) {
      tabsBtn.addEventListener('click', function (event) {
         const path = event.currentTarget.dataset.path
         // стилизация табов при нажатии
         document.querySelectorAll('.section-work__step').forEach(function (tabContent) {
            tabContent.classList.remove('section-work__step-active')
         })
         event.target.classList.add('section-work__step-active')

         document.querySelectorAll('.tab-work__item').forEach(function (tabContent) {
            tabContent.classList.remove('tab-work__item-active')
         })
         document.querySelector(`[data-target="${path}"]`).classList.add('tab-work__item-active')
      })
   })
})