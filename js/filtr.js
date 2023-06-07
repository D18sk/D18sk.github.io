window.addEventListener("DOMContentLoaded", function () {
    "use strict";

    //ФИЛЬТРАЦИЯ
    let allTab = document.querySelector('.stAll'),
        styler1Tab = document.querySelector('.st1'),
        styler2Tab = document.querySelector('.st2'),
        styler3Tab = document.querySelector('.st3'),
        tabTypes = document.querySelectorAll('.type'),
        allTabTypes = Array.from(tabTypes);



    styler1Tab.addEventListener('click', showst1)
    function showst1() {
        allTabTypes.forEach(filt => {
            filt.classList.remove("remove", "show");

            allTab.classList.remove("active-filt");
            styler1Tab.classList.add("active-filt");
            styler2Tab.classList.remove("active-filt");
            styler3Tab.classList.remove("active-filt");

            if (!filt.classList.contains("show")) {
                if (filt.classList.contains("st1")) {
                    filt.classList.add("show");
                } else
                    filt.classList.add("remove");
            } else
                filt.classList.remove("show");
        })
    }

    styler2Tab.addEventListener('click', showst2)
    function showst2() {
        allTabTypes.forEach(filt => {
            filt.classList.remove("remove", "show");

            allTab.classList.remove("active-filt");
            styler1Tab.classList.remove("active-filt");
            styler2Tab.classList.add("active-filt");
            styler3Tab.classList.remove("active-filt");

            if (!filt.classList.contains("show")) {
                if (filt.classList.contains("st2")) {
                    filt.classList.add("show");
                } else
                    filt.classList.add("remove");
            } else
                filt.classList.remove("show");
        })
    }

    styler3Tab.addEventListener('click', showst3)
    function showst3() {
        allTabTypes.forEach(filt => {
            filt.classList.remove("remove", "show");

            allTab.classList.remove("active-filt");
            styler1Tab.classList.remove("active-filt");
            styler2Tab.classList.remove("active-filt");
            styler3Tab.classList.add("active-filt");

            if (!filt.classList.contains("show")) {
                if (filt.classList.contains("st3")) {
                    filt.classList.add("show");
                } else
                    filt.classList.add("remove");
            } else
                filt.classList.remove("show");
        })
    }

    
    allTab.addEventListener('click', showall)
    function showall() {
        allTabTypes.forEach(filt => {

            allTab.classList.add("active-filt");
            styler1Tab.classList.remove("active-filt");
            styler2Tab.classList.remove("active-filt");
            styler3Tab.classList.remove("active-filt");

            filt.classList.remove("remove", "show");
        })
    }

});
