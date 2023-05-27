fetch('https://fakestoreapi.com/products?limit=9')
            .then(res=>res.json())
            .then(data=> {
                
                let text = ' '
                for (let i = 0; i < 9; i++) {
                    let produto = data[i]
                    
                    text += `<div class="subcard">
                    <img id="subcardjogo"  src="${produto.image}">
                    <p class="subcardtitle">${produto.title}</p>
                    <img id="subcardstar" src="images/star.png"> <img id="subcardstar" src="images/star.png"> <img id="subcardstar" src="images/star.png"> <img id="subcardstar" src="images/star.png"> <img id="subcardstar" src="images/star.png">
                    <p class="subcardprice"> R$ ${produto.price}</p>
                    <p class="subcardprice">${produto.description}</p>
                    <button onclick= "changePage(${produto.id})" class="subcardbotao" id="botaoMore${produto.id}" value=${produto.id} >Compre agora</button>
                </div>`
                }
                
                
                document.getElementById('cardprincipal').innerHTML = text
            })

            

            function pressSearch() {
                
                let key = document.getElementById('pesquisa').value
                
                //window.location.href='pesquisa.html'


                fetch(`https://fakestoreapi.com/products/category/${key}`)
                .then(res=>res.json())
                .then(data=> {
                    let textSearch = ' '
                
                for (let i = 0; i < data.length; i++) {
                    let pesquisa = data[i]
                    
                    textSearch += `<div class="subcard">
                    <img id="subcardjogo"  src="${pesquisa.image}">
                    <p class="subcardtitle">${pesquisa.title}</p>
                    <img id="subcardstar" src="images/star.png"> <img id="subcardstar" src="images/star.png"> <img id="subcardstar" src="images/star.png"> <img id="subcardstar" src="images/star.png"> <img id="subcardstar" src="images/star.png">
                    <p class="subcardprice"> R$ ${pesquisa.price}</p>
                    <p class="subcardprice">${pesquisa.description}</p>
                    <button onclick= "changePage(${pesquisa.id})" class="subcardbotao" id="botaoMore" value="${pesquisa.id}">Compre agora</button>
                </div>`
                }
                
                document.getElementById('cardprincipal').innerHTML = textSearch

            })
            
            

        }

        function changePage(produtoid) {

            window.location.href=`detalhes.html?id=${produtoid}` 
            
            
            
        }
            