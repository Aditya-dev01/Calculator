let string = "";
let btn = document.querySelectorAll(".box");
Array.from(btn).forEach((box) => {
    box.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string);
            document.querySelector(".user").value = string;
        }
        else if (e.target.innerHTML=="DEL") {
            string=string.slice(0,-1);
            document.querySelector(".user").value=string;
        }
        else if (e.target.innerHTML=="AC") {
            string="";
            document.querySelector(".user").value=string;
        }
        else {
            console.log(e.target.innerHTML);
            string = string + e.target.innerHTML;
            document.querySelector(".user").value = string;
        }

    })
})
