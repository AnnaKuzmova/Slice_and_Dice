window.addEventListener('load', function(){
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
})