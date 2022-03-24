
        const btn = document.querySelectorAll(".container_product-left-btn")
        const Img = document.querySelector('.container_product-left-img img').src
        const Name = document.querySelector('.container_product-right-header').innerHTML
        const Price = document.querySelector('.container_product-right-price-span').innerHTML
        const Add = document.querySelector('.header-top__login-cart-body-list')
        const productSLsp = document.querySelector('.header-top__login-cart-body-info-quantity').innerHTML
        const btnSub = document.querySelector('.btn-sub')
        const btnSum = document.querySelector('.btn-sum')
        const SLSP = document.querySelector('.SLsp')
        const Table = document.querySelector('.header-top__login-cart-body-list-table') 
        const btnLogin = document.querySelector('.modal-container-login')
        const btnSigngin = document.querySelector('.modal-container-signin')
        const login = document.querySelector('.modal-container-body-login')
        const signgin = document.querySelector('.modal-container-body-signin')
        const btnCancel = document.querySelectorAll('.modal-btn-cancel')
        const modal = document.querySelector('.modal')
        const modalcontaier = document.querySelector('.modal-container')
        const btnmodalOpen = document.querySelector('.header-top__login-admin')



        btncancel()
        function btncancel(){
            btnCancel[0].addEventListener("click",function(event){
                modal.classList.remove('modal-open-flex')
            })
            btnCancel[1].addEventListener("click",function(event){
                modal.classList.remove('modal-open-flex')
            })
        }
        btnlogin()
        function btnlogin(){
            btnLogin.addEventListener("click",function(event){
                signgin.classList.remove('modal-open')
                login.classList.add('modal-open')
                btnLogin.classList.add('modal-container-active')
                btnSigngin.classList.remove('modal-container-active')
            })
        }
        btnsigngin()
        function btnsigngin(){
            btnSigngin.addEventListener("click",function(event){
                login.classList.remove('modal-open')
                signgin.classList.add('modal-open')
                btnSigngin.classList.add('modal-container-active')
                btnLogin.classList.remove('modal-container-active')
            })
        }

        function openmodal(){
            modal.classList.add('modal-open-flex')
        }

        function closebuytickets(){
            modal.classList.remove('modal-open-flex')
        }

        function closemodal(event) {
            event.stopPropagation()  
        }

        modal.addEventListener('click',closebuytickets)
        modalcontaier.addEventListener('click', closemodal)
        btnmodalOpen.addEventListener('click',openmodal)
        btnSubb()
        function btnSubb(){
            btnSub.addEventListener("click",function(event){
                if(SLSP.innerHTML == 1)
                return
                var Sl = SLSP.innerHTML
                Sl--
                SLSP.innerHTML = Sl
            })
        }
        btnSumm()
        function btnSumm(){
            btnSum.addEventListener("click",function(event){
                var Sl = SLSP.innerHTML
                Sl++
                SLSP.innerHTML = Sl
            })
        }
        deleteCart()

        btn.forEach(function(button,index){
            button.addEventListener("click",function(event){{
                addcart(Img,Name,Price)
            }})
        })
        function addcart(Img,Name,Price){
            var SLSPnumber = SLSP.innerHTML
            const cartItem = document.querySelectorAll('.header-top__login-cart-body-list')
            
            
            for(var i=0; i< cartItem.length;i++){
                const productSL = document.querySelectorAll('.header-top__login-cart-body-info-quantity')
                var SL = new Number(productSL[i].innerHTML);
                var productT = document.querySelectorAll('.header-top__login-cart-body-name')
                if(productT[i].innerHTML==Name)
                {   
                    var SLsub = new Number(SLSP.innerHTML)
                    SL = SL + SLsub
                    productSL[i].innerHTML = SL
                    deleteCart()
                    carrtotal()
                    return
                }
            }
        Table.innerHTML = Table.innerHTML + '<div class="container_nav-border"></div><div class="header-top__login-cart-body-list"><div class="header-top__login-cart-body-img"><img src="'+Img+'" alt=""></div><div class="header-top__login-cart-body-container"><div class="header-top__login-cart-body-name">'+Name+'</div><div class="header-top__login-cart-body-info-price"><span class="header-top__login-cart-body-info-price-span">'+Price+'</span><sub>đ</sub><span class="header-top__login-cart-body-info-price-x" >X</span><div class="header-top__login-cart-body-info-quantity">'+SLSPnumber+'</div><a href="#" class="header-top__login-cart-body-info-icon"><i class="fa-solid fa-trash-can"></i></a></div></div></div>'
        deleteCart()
        carrtotal()
        }

        function carrtotal() {
            const cartItem = document.querySelectorAll('.header-top__login-cart-body-list')
            var totalB = 0
            for(var i=0; i< cartItem.length;i++){
                const forPrice = cartItem[i].querySelector('.header-top__login-cart-body-info-price-span').innerHTML
                const forSL = cartItem[i].querySelector('.header-top__login-cart-body-info-quantity').innerHTML
                totalA = forPrice*forSL
                console.log(forSL)
                totalB = totalB + totalA
                

            }
            const carrtotalA = document.querySelector('.header-top__login-cart-body-total-price')
            carrtotalA.innerHTML = totalB
        }
        
        function deleteCart(){
            const cartItem = document.querySelectorAll('.header-top__login-cart-body-list')
            for(var i=0; i< cartItem.length;i++){
                var trash = document.querySelectorAll('.header-top__login-cart-body-info-icon')
                trash[i].addEventListener("click",function(event){
                    var cartDelete = event.target
                    var cartitem = cartDelete.parentElement.parentElement.parentElement.parentElement
                    cartitem.remove()
                    carrtotal()
                })
            }

        }