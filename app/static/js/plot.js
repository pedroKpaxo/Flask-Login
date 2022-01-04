function plot(pocos) {
    let holder = document.getElementById('svg');
        
        
        pocos.forEach(function (poco) {
            let lat = poco.querySelector("#lat").innerText
            let long = poco.querySelector("#long").innerText
            
            let codename =String(poco.querySelector("#wellname").innerText)
            console.log(codename)
            
            
            console.log(lat);
            const f = (() => {

                //let r = poco.camadaEvapoito * 0.01;
                // create rect
                dim = 0.08
                const rect1 = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "rect");
                rect1.setAttribute("x", long);
                rect1.setAttribute("y", lat* -1);
                rect1.setAttribute("width", dim)
                rect1.setAttribute("height", dim);
                
                rect1.setAttribute("fill", "red");
                rect1.setAttribute("id",codename);
                

                //label
                const label = document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "text",
                );
                label.classList.add('label');
                label.setAttribute("x", long);
                label.setAttribute("y", lat * -1);
                label.setAttribute("font-size", "0.0045rem");

                
                label.textContent=codename;
                //console.log(label.textContent);

                // attach it to the container
                holder.appendChild(rect1);
                holder.appendChild(label);




            });

            f();
        })
    }