
function loaded() {
    
    let produtoid = window.location.href.split("?")[1].split("=")[1]
    


    fetch(`https://fakestoreapi.com/products/${produtoid}`)
            .then(res=>res.json())
            .then(data=> {
                let textMore = ' '
                
                
                    textMore += `<div id="center">
                    <div class="subcard">
                    <img id="subcardimage" src="${data.image}">
                    <p class="subcardtitle">${data.title}</p>
                    <img id="subcardstar" src="images/star.png"> <img id="subcardstar" src="images/star.png"> <img id="subcardstar" src="images/star.png"> <img id="subcardstar" src="images/star.png"> <img id="subcardstar" src="images/star.png">
                    <p class="subcardprice"> R$ ${data.price}</p>
                    <p class="subcardprice"> Categoria: ${data.category}</p>
                    <p class="subcarddesc">${data.description}</p>

                </div>
                </div>`
                
                
                document.getElementById('resultado').innerHTML = textMore
                
            })
            

}

