const directory = {
    'index': {
        fr: '../fr/index.html',
        en: '../en/index.html'
    },
    'presentation': {
        fr: '../fr/presentation.html',
        en: '../en/presentation.html'
    },
    'suggest': {
        fr: '../fr/suggerer-lieu.html',
        en: '../en/suggest-location.html'
    }
}

function setAltLanguage() {
    //définit le href du '#alt-linguistique'
    var element = document.getElementById('alt-linguistique') 
    var pageType = element.getAttribute('data-location-id')
    var lang = document.getElementsByTagName('html')[0].getAttribute('lang')
    lang = ((lang === 'fr')? 'en' : 'fr') //inverser la langue
    element.href = directory[pageType][lang] 
}

function setShowHideDetail() {
    //initialise les événements onClick sur les boutons '.show-hide'
    var showHideList = document.querySelectorAll('a.show-hide')
    for (i=0; i<showHideList.length; i++) {
        showHideList[i].addEventListener('click', showHideDetail)
    }
}

function randomNumber(bMin, bMax) {
    return bMin + Math.floor((bMax - bMin + 1) * Math.random());
}

function showHideDetail(click) {
    var a = click.currentTarget
    var detailID = a.getAttribute('data-for')
    var detail = document.querySelector('#'+detailID)
    var detailList = new Array()
    if (a.firstChild.classList.contains('plus')) {
        //Cacher tous les détails
        detailList["detail"] = document.querySelectorAll('main .detail')
        detailList["a"] =  document.querySelectorAll('a.show-hide')
        hideDetail(detailList)
        //Afficher le détail visé  
        showDetail(detail, a)      
    } else {
        //Cacher le détail visé
        detailList["detail"] = [detail]
        detailList["a"] = [a]
        hideDetail(detailList)
    }
}

function hideDetail(detailList) {
    for (i=0; i<detailList["detail"].length; i++) {
        //cacher le détail
        detailList["detail"][i].classList.add('hidden')
        //Modifier l'icone du anchor
        detailList["a"][i].firstChild.classList.remove('minus')
        detailList["a"][i].firstChild.classList.add('plus')
        detailList["a"][i].lastChild.innerHTML = 'Montrer les détails'
        //Ajuster le background de la grille
        detailList["a"][i].parentElement.classList.remove('unfolded')
    }
}

function showDetail(detail, a) {
    //afficher le détail
    detail.classList.remove('hidden')
    //Modifier l'icone du anchor
    a.firstChild.classList.remove('plus')
    a.firstChild.classList.add('minus')
    a.lastChild.innerHTML = 'Cacher les détails'
    //Ajuster le background de la grille
    a.parentElement.classList.add('unfolded')
}

function setRequired() {
    var labelList = document.querySelectorAll('label')
    for (i=0; i<labelList.length; i++) {
        var elementID = labelList[i].htmlFor
        element = document.getElementById(elementID)
        if (element.required) {
            labelList[i].classList.add('required')
        }
    }
}

