
        // - Receiving the list from the other script
        const MAIN_LIST = _LIST;
       
        const Holder_List = document.getElementById('mainlist');

        function Start_List(list_, container) {
            // - Looping the list
            list_.forEach(element => {
                // - Creating a FRAME 
                const divframe = document.createElement("div");
                divframe.className = "pocoframe"
                // - Creating a Tag 
                const inner_tag = document.createElement("div");

                // - Creating a tag for the name
                const w_name = document.createElement("h3");
                const bacia_name = document.createElement("p");
                bacia_name.id = element['BACIA'];
                const state_name = document.createElement("p");
                state_name.id = element['ESTADO'];
                const city_name = document.createElement("p");
                city_name.id= element['MUNICIPIO'];
                const display_but = document.createElement('button');
                display_but.innerHTML= "Show More";
                display_but.className = 'pf_but';
                // - Appending the name
                w_name.textContent = element['POCO'];
                bacia_name.textContent = element['BACIA'];
                state_name.textContent = element['ESTADO'];
                city_name.textContent = element['MUNICIPIO'];


                inner_tag.append(w_name);
                inner_tag.appendChild(bacia_name);
                inner_tag.appendChild(state_name);
                inner_tag.appendChild(city_name);
                inner_tag.append(display_but)
                inner_tag.className = "pf_in";
                
                const group_tag = document.createElement("div");
                // - Inner group
                form_k = element['POCO'];
                const form_gr = element[form_k];

                for (const x in form_gr){
                    gr_values = form_gr[x];
                    console.log(x,gr_values);
                    for (const k in gr_values){
                        console.log(k,gr_values[k]);
                    }
                    
                }
                //divframe.append(group_tag)
                 // - Criando frame OUTER para Keys & Values
                const outer_tag = document.createElement("div");
                outer_tag.className = "pf_ot";
                outer_tag.append(form_gr)
                // - Looping
                for (const key in element) {
                    // - Div to the pairs
                    const pairs = document.createElement("div");
                    // - Div for for TXT
                    const k_div = document.createElement("div");
                    const v_div = document.createElement("div");
                    // - TXT elemnts for input
                    const k_tx = document.createElement("h4");
                    k_tx.id = key
                    const v_tx = document.createElement("p");
                    // - Variables for key, values
                    
                    k = key;
                    v = element[key];
                    // - Pairing variables to text content
                    k_tx.textContent = `${k}:`;
                    v_tx.textContent = v;
                    // - Append text to div
                    k_div.append(k_tx);
                    v_div.append(v_tx);
                    // - Appendig d
                    pairs.append(k_div, v_div);
                    outer_tag.append(pairs);
                    // - console.log(key, element[key])
                }
                divframe.append(inner_tag);
                divframe.append(outer_tag);
                container.append(divframe);
            });
        }
    
  
    
        window.onload=Start_List(MAIN_LIST,Holder_List);
        const AGP_COUNT = document.getElementById('AGP_COUNT');
        AGP_COUNT.innerText= MAIN_LIST.length;

        let state_list = [];
        const bacia_list=[];
        const city_list=[];
        MAIN_LIST.forEach(e=>{
            
            state_list.push(e['ESTADO']);
            bacia_list.push(e['BACIA']);
            city_list.push(e['MUNICIPIO'])
        });

        let un_city = new Set(city_list);
        let un_state = new Set(state_list);
        let un_bacia = new Set(bacia_list);

        let bl = document.getElementById('baciaList');
        let sl = document.getElementById('statelist');
        let cl = document.getElementById('citylist');
        un_bacia.forEach(e=>{
            let li = document.createElement('li');
            li.id= 'libut';
            li.textContent=e;
            bl.append(li);
        });
        un_state.forEach(e=>{
            let li = document.createElement('li');
            li.textContent=e;
            li.id= 'libut';
            sl.append(li);
        });
        un_city.forEach(e=>{
            let li = document.createElement('li');
            li.textContent=e;
            li.id= 'libut';
            cl.append(li);
        });
        
        const libut = document.querySelectorAll('#libut');
        //console.log(libut);
        libut.forEach(but=>{
            but.addEventListener('click',change);
        })


        function change(){
            // - Takes the text to the target
            target = this.innerText;
            console.log(target)
            tgt= `#${target}`;
            clearlist(Holder_List);
            
            
            
            MAIN_LIST.forEach(e=>{  
                const RESULT= []
                if ( e['ESTADO']===target){
                    let resultlist=[];
                    resultlist.push(e);  
                    Start_List(resultlist,Holder_List)
                };
                if ( e['BACIA']===target){
                    let resultlist=[];
                    resultlist.push(e);  
                    Start_List(resultlist,Holder_List)
                }
                if ( e['MUNICIPIO']==target){
                    console.log(target);
                    let resultlist=[];
                    resultlist.push(e);  
                    Start_List(resultlist,Holder_List)
                }
            })
           
            
        }
        function setList(reslist,targetlist){
            
            Start_List(reslist,targetlist)

        }
        function clearlist(node) {
                while (node.firstChild) {
                    node.removeChild(node.lastChild);
                }
            }
        //console.log(un_state)

