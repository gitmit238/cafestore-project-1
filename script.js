let currentLanguage = "en";


function changeLanguage(){


    currentLanguage =
    currentLanguage === "en" ? "fa" : "en";


    document
    .querySelectorAll("[data-en]")
    .forEach(function(element){


        element.innerHTML =
        element.getAttribute(
            "data-" + currentLanguage
        );


    });



    let button = document.getElementById("languageBtn");


    if(currentLanguage === "fa"){


        document.body.classList.add("rtl");

        document.documentElement.lang="fa";


        // تغییر متن دکمه به انگلیسی
        button.innerHTML="English";


    }

    else{


        document.body.classList.remove("rtl");

        document.documentElement.lang="en";


        // برگشت دکمه به فارسی
        button.innerHTML="فارسی";


    }


}