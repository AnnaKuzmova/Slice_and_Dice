window.addEventListener('load', function(){

    /*Showing and hiding the secondary navigation*/
    let secondaryNavigation = this.document.querySelector('.secondary-navigation')
    this.document.addEventListener('scroll', function(e){
      
        if(window.innerWidth > 1100){
            if(window.scrollY > 300) {
                secondaryNavigation.style.top = '0'
            } else {
                secondaryNavigation.style.top = '-20%'
            }
          }
    })
    
    /*
        Creating array of objects in which we store
        data related to every feature section.
        Then foreach the array and creating the html for the cards 
        and apending it to the feature section holder.
        We do this to avoid hardcoding data in case we want to change or delete a signle feature.
    */

        let arrayOfFeatures = [
            {
                imgSrc: "/images/icon1.png",
                title : "easily customized",
                description : "Hubo emma ma suma sofa sola cola es. Id sebastian correrias mi procuraba. Pierna la bebida ir percal. Rodeabase propiedad dominante bonifacio."
            },
            {
                imgSrc: "/images/icon2.png",
                title : "responsive ready",
                description : "Hubo emma ma suma sofa sola cola es. Id sebastian correrias mi procuraba. Pierna la bebida ir percal. Rodeabase propiedad dominante bonifacio."
            },
            {
                imgSrc: "/images/icon3.png",
                title : "modern design",
                description : "Hubo emma ma suma sofa sola cola es. Id sebastian correrias mi procuraba. Pierna la bebida ir percal. Rodeabase propiedad dominante bonifacio."
            },
            {
                imgSrc: "/images/icon4.png",
                title : "clean code",
                description : "Hubo emma ma suma sofa sola cola es. Id sebastian correrias mi procuraba. Pierna la bebida ir percal. Rodeabase propiedad dominante bonifacio."
            },
            {
                imgSrc: "/images/icon5.png",
                title : "ready to ship",
                description : "Hubo emma ma suma sofa sola cola es. Id sebastian correrias mi procuraba. Pierna la bebida ir percal. Rodeabase propiedad dominante bonifacio."
            },
            {
                imgSrc: "/images/icon6.png",
                title : "download for free",
                description : "Hubo emma ma suma sofa sola cola es. Id sebastian correrias mi procuraba. Pierna la bebida ir percal. Rodeabase propiedad dominante bonifacio."
            }
        ]
        
        let featuresHolder = this.document.querySelector('#feature-section')
        
        arrayOfFeatures.forEach(item => {
            let articleElement = this.document.createElement('article')
            articleElement.classList.add("feature-card")
            let imageElement = this.document.createElement('img')
            imageElement.setAttribute('src', `${item.imgSrc}`)
            articleElement.appendChild(imageElement)
            let headingElement = this.document.createElement('h3')
            let headingText = this.document.createTextNode(`${item.title}`)
            headingElement.append(headingText)
            articleElement.appendChild(headingElement)
            let paragraphElement  = this.document.createElement('p')
            let paragraphText = this.document.createTextNode(`${item.description}`)
            paragraphElement.append(paragraphText)
            articleElement.appendChild(paragraphElement)
            
            //after fully creating the feature card, we append it to the feature's holder
            featuresHolder.appendChild(articleElement)
        })

        /*Creating array of work-images's path to fill into the work section holder*/
        let arrayOfWorkImages = [
            "/images/work1.jpg",
            "/images/work2.jpg",
            "/images/work3.jpg",
            "/images/work4.jpg",
            "/images/work5.jpg",
            "/images/work6.jpg",
            "/images/work7.jpg",
            "/images/work8.jpg",
        ]

        //Selecting the container/holder for the images
        let workImagesHolder = this.document.querySelector("#work-section")
        
        //Filling the container/holder
        arrayOfWorkImages.forEach(img => {
            let divElement = this.document.createElement("div")
            let imgElement = this.document.createElement("img")
            imgElement.setAttribute('src', `${img}`)
            divElement.appendChild(imgElement)
            let sectionElement = this.document.createElement("section")
            sectionElement.classList.add("work-info")
            let titleElement = this.document.createElement("h3")
            let titleText = this.document.createTextNode('project name')
            titleElement.appendChild(titleText)
            sectionElement.appendChild(titleElement)
            let pElement = this.document.createElement("p")
            let pText = this.document.createTextNode("user interface design")
            pElement.appendChild(pText)
            sectionElement.appendChild(pElement)
            divElement.appendChild(sectionElement)
            workImagesHolder.appendChild(divElement)
        })

        /*Creatinf array of objects for team members, each object hold data about a team member. Then fill the html container via js, to avoid hardcoding data in the future.*/
         let arrayOfTeamMembers = [
             {
                 name : "Ruth Woods",
                 imgSrc : "/images/person1.jpg",
                 position : "Founder, CEO",
                 description : "Sole uomo mai puo essa pone onda ben. Del temo sue pie senz una vidi. Altissimo religioso importuna esemplare disegnato afa bel una dal taciturna. Sai cio ora oro soli dire rete pini usci. Ne struggeva ginocchia conquista me rapimento. "
             },
             {
                name : "Timothy Reed",
                imgSrc : "/images/person2.jpg",
                position : "co-founder, developer",
                description : "Sole uomo mai puo essa pone onda ben. Del temo sue pie senz una vidi. Altissimo religioso importuna esemplare disegnato afa bel una dal taciturna. Sai cio ora oro soli dire rete pini usci. Ne struggeva ginocchia conquista me rapimento. "
            },
            {
                name : "Victoria Valdez",
                imgSrc : "/images/person3.jpg",
                position : "ui designer",
                description : "Sole uomo mai puo essa pone onda ben. Del temo sue pie senz una vidi. Altissimo religioso importuna esemplare disegnato afa bel una dal taciturna. Sai cio ora oro soli dire rete pini usci. Ne struggeva ginocchia conquista me rapimento. "
            },
            {
                name : "Beverly Little",
                imgSrc : "/images/person4.jpg",
                position : "data scientist",
                description : "Sole uomo mai puo essa pone onda ben. Del temo sue pie senz una vidi. Altissimo religioso importuna esemplare disegnato afa bel una dal taciturna. Sai cio ora oro soli dire rete pini usci. Ne struggeva ginocchia conquista me rapimento. "
            },
         ]
         let socialMediaClasses = ["fa-facebook-f", "fa-twitter","fa-linkedin"]
         //selecting the holder for team members cards
         let teamMembersHolder = this.document.querySelector("#team-holder")
         
         //Filling the team members container
         arrayOfTeamMembers.forEach(person => {
            let articleElement = this.document.createElement('section')
            articleElement.classList.add("team-member-card")
            let imgElement  = this.document.createElement('img')
            imgElement.setAttribute('src', `${person.imgSrc}`)
            articleElement.appendChild(imgElement)
            let headingElement = this.document.createElement('h3')
            let nameText = this.document.createTextNode(`${person.name}`)
            headingElement.append(nameText)
            articleElement.appendChild(headingElement)
            let spanElement = this.document.createElement('span')
            let positionText = this.document.createTextNode(`${person.position}`)
            spanElement.append(positionText)
            articleElement.appendChild(spanElement)
            let paragraphElement = this.document.createElement('p')
            let descriptionText = this.document.createTextNode(`${person.description}`)
            paragraphElement.append(descriptionText)
            articleElement.appendChild(paragraphElement)
            socialMediaClasses.forEach(name => {
                let i = this.document.createElement('i')
                i.classList.add("fab", `${name}`)
                articleElement.appendChild(i)
            })
            teamMembersHolder.appendChild(articleElement)
         })

         //Creating testimonals quotes in an array
         let testimonals = [
             {
                 text : 'Implorare ha bisognava sottratta levandosi levandoti tu sottrarre. Nascondere affaticato pel ricomincia sollevando puo sei ora. Dorata gli sfugge par pei inerte quindi.',
                 person : 'Alexander Yukov, software developer at horizon',
                 image : '/images/carousel-3.jpg'
             },
             {
                 text : 'Che diventi dio ritardo cio piu bisogna seguivo. Ad mistero vivente se volutta vecchia. Gabbie sui colore ora doveva saluta. Fame suo mine nego buio udi.',
                 person : 'susan sims, interaction designer at xyz',
                 image : '/images/carousel-1.jpg'
             },
             {
                 text : 'Affinita guardato ginocchi ove oro scolpita eri apparire partirsi. Voto lo ella solo in il sa ieri solo tebe. Sul questo eri divano ancora gloria stanco riposi.',
                 person : 'sofia vergara, ui designer at duffy inc',
                 image : '/images/carousel-2.jpg'
             }, 
             {
                 text : 'Volutta turbini rimanga pulsare maestro poi amo che. Sgomento impronta mantenga ch ex. Dalbo chi buona vivra arida molto siedi poi. Importa dattero.',
                 person : 'adam abrams, ceo of solutions inc',
                 image : '/images/carousel-4.jpg'
             },
             {
                 text : 'Lo narcotico in seguitare ti taciturna. Dov pel busto forma petto. Sta una pensieroso sorridente mio bianchezza. Pie san.',
                 person : 'liza smith, data scientist at yuko inc',
                 image : '/images/carousel-5.jpg'
             }
         ]

         let quote = this.document.querySelector(".testimonal-text-holder blockquote")
         let personDetails = this.document.querySelector(".testimonal-text-holder span")
         let imageTag = this.document.querySelector("#testimonals img")
         let circles = Array.from(this.document.querySelectorAll(".carousel-controls i"))
         let index = 0;
         //Carousel animation-implementation

         //Base function for changing the carousel content with one argument - index value

         function changeContent(index) {
            quote.innerHTML = testimonals[index].text
            personDetails.innerHTML = testimonals[index].person
            imageTag.setAttribute('src', `${testimonals[index].image}`)
         }

         circles.forEach(circle => {
             circle.addEventListener('click', function(){
                 let current = this
                 index = current.getAttribute('index')
                 circles.forEach(cr => cr.classList.remove('active'))
                 current.classList.add('active')
                 changeContent(index)
             })
         })

         //Selecting the arrows
         let nextTesimonalDataButton = this.document.querySelector('.fas.fa-chevron-right')
         let previoustTesimonalDataButton = this.document.querySelector('.fas.fa-chevron-left')

        //Implementing the arrows's functuonality

        nextTesimonalDataButton.addEventListener('click', () => {
            if(index == testimonals.length) {
                index = 0
            }

            circles.forEach(cr => cr.classList.remove('active'))
            let currentCirlce = circles.find(cr => cr.getAttribute('index') == index)
            currentCirlce.classList.add('active')
            changeContent(index)
            index++
        })

        previoustTesimonalDataButton.addEventListener('click', () => {
            if(index < 0) {
                index = testimonals.length - 1
            }

            circles.forEach(cr => cr.classList.remove('active'))
            let currentCirlce = circles.find(cr => cr.getAttribute('index') == index)
            currentCirlce.classList.add('active')
            changeContent(index)
            index--
        })
           

        
        
        

})

