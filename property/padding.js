// property, tag dan value - Muhammad Khoirul Huda

let propertiesPadding = [
    'v-p-1',
    'v-p-2',
    'v-p-3',
    'v-p-4',
    'v-pt-1',
    'v-pt-2',
    'v-pt-3',
    'v-pt-4',
    'v-pl-1',
    'v-pl-2',
    'v-pl-3',
    'v-pl-4',
    'v-pr-1',
    'v-pr-2',
    'v-pr-3',
    'v-pr-4',
    'v-pb-1',
    'v-pb-2',
    'v-pb-3',
    'v-pb-4'
]

let valuesPadding = [
    'padding: 10px',
    'padding: 20px;',
    'padding: 30px;',
    'padding: 40px;',
    'padding-top: 10px',
    'padding-top: 20px;',
    'padding-top: 30px;',
    'padding-top: 40px;',
    'padding-left: 10px;',
    'padding-left: 20px;',
    'padding-left: 30px;',
    'padding-left: 40px;',
    'padding-right: 10px;',
    'padding-right: 20px;',
    'padding-right: 30px;',
    'padding-right: 40px;',
    'padding-bottom: 10px;',
    'padding-bottom: 20px;',
    'padding-bottom: 30px;',
    'padding-bottom: 40px;',
]

// pengkondisian

for (var i = 0; i < propertiesPadding.length; i++) {
    if (document.querySelector('body').classList.contains(propertiesPadding[i]) && !document.querySelector('style').innerText.includes(propertiesPadding[i])) {

        let styles = ` 
    .${propertiesPadding[i]} { 
        ${valuesPadding[i]}
    }`;

        document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
    }
}

setTimeout(() => {

    if (document.querySelector('div')) {
        for (var i = 0; i < propertiesPadding.length; i++) {
            for (var a = 0; a < document.querySelectorAll('div').length; a++) {
                if (document.querySelectorAll('div')[a].classList.contains(propertiesPadding[i]) && !document.querySelector('style').innerText.includes(propertiesPadding[i])) {

                    let styles = ` 
            .${propertiesPadding[i]} { 
                ${valuesPadding[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h1')) {
        for (var i = 0; i < propertiesPadding.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h1').length; a++) {
                if (document.querySelectorAll('h1')[a].classList.contains(propertiesPadding[i]) && !document.querySelector('style').innerText.includes(propertiesPadding[i])) {

                    let styles = ` 
                .${propertiesPadding[i]} { 
                    ${valuesPadding[i]}
                }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h2')) {
        for (var i = 0; i < propertiesPadding.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h2').length; a++) {
                if (document.querySelectorAll('h2')[a].classList.contains(propertiesPadding[i]) && !document.querySelector('style').innerText.includes(propertiesPadding[i])) {

                    let styles = ` 
            .${propertiesPadding[i]} { 
                ${valuesPadding[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h3')) {
        for (var i = 0; i < propertiesPadding.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h3').length; a++) {
                if (document.querySelectorAll('h3')[a].classList.contains(propertiesPadding[i]) && !document.querySelector('style').innerText.includes(propertiesPadding[i])) {

                    let styles = ` 
            .${propertiesPadding[i]} { 
                ${valuesPadding[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h4')) {
        for (var i = 0; i < propertiesPadding.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h4').length; a++) {
                if (document.querySelectorAll('h4')[a].classList.contains(propertiesPadding[i]) && !document.querySelector('style').innerText.includes(propertiesPadding[i])) {

                    let styles = ` 
            .${propertiesPadding[i]} { 
                ${valuesPadding[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h5')) {
        for (var i = 0; i < propertiesPadding.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h5').length; a++) {
                if (document.querySelectorAll('h5')[a].classList.contains(propertiesPadding[i]) && !document.querySelector('style').innerText.includes(propertiesPadding[i])) {

                    let styles = ` 
            .${propertiesPadding[i]} { 
                ${valuesPadding[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('h6')) {
        for (var i = 0; i < propertiesPadding.length; i++) {
            for (var a = 0; a < document.querySelectorAll('h6').length; a++) {
                if (document.querySelectorAll('h6')[a].classList.contains(propertiesPadding[i]) && !document.querySelector('style').innerText.includes(propertiesPadding[i])) {

                    let styles = ` 
            .${propertiesPadding[i]} { 
                ${valuesPadding[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('span')) {
        for (var i = 0; i < propertiesPadding.length; i++) {
            for (var a = 0; a < document.querySelectorAll('span').length; a++) {
                if (document.querySelectorAll('span')[a].classList.contains(propertiesPadding[i]) && !document.querySelector('style').innerText.includes(propertiesPadding[i])) {

                    let styles = ` 
            .${propertiesPadding[i]} { 
                ${valuesPadding[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('p')) {
        for (var i = 0; i < propertiesPadding.length; i++) {
            for (var a = 0; a < document.querySelectorAll('p').length; a++) {
                if (document.querySelectorAll('p')[a].classList.contains(propertiesPadding[i]) && !document.querySelector('style').innerText.includes(propertiesPadding[i])) {

                    let styles = ` 
            .${propertiesPadding[i]} { 
                ${valuesPadding[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('small')) {
        for (var i = 0; i < propertiesPadding.length; i++) {
            for (var a = 0; a < document.querySelectorAll('small').length; a++) {
                if (document.querySelectorAll('small')[a].classList.contains(propertiesPadding[i]) && !document.querySelector('style').innerText.includes(propertiesPadding[i])) {

                    let styles = ` 
            .${propertiesPadding[i]} { 
                ${valuesPadding[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('input')) {
        for (var i = 0; i < propertiesPadding.length; i++) {
            for (var a = 0; a < document.querySelectorAll('input').length; a++) {
                if (document.querySelectorAll('input')[a].classList.contains(propertiesPadding[i]) && !document.querySelector('style').innerText.includes(propertiesPadding[i])) {

                    let styles = ` 
            .${propertiesPadding[i]} { 
                ${valuesPadding[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('textarea')) {
        for (var i = 0; i < propertiesPadding.length; i++) {
            for (var a = 0; a < document.querySelectorAll('textarea').length; a++) {
                if (document.querySelectorAll('textarea')[a].classList.contains(propertiesPadding[i]) && !document.querySelector('style').innerText.includes(propertiesPadding[i])) {

                    let styles = ` 
            .${propertiesPadding[i]} { 
                ${valuesPadding[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('select')) {
        for (var i = 0; i < propertiesPadding.length; i++) {
            for (var a = 0; a < document.querySelectorAll('select').length; a++) {
                if (document.querySelectorAll('select')[a].classList.contains(propertiesPadding[i]) && !document.querySelector('style').innerText.includes(propertiesPadding[i])) {

                    let styles = ` 
            .${propertiesPadding[i]} { 
                ${valuesPadding[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('button')) {
        for (var i = 0; i < propertiesPadding.length; i++) {
            for (var a = 0; a < document.querySelectorAll('button').length; a++) {
                if (document.querySelectorAll('button')[a].classList.contains(propertiesPadding[i]) && !document.querySelector('style').innerText.includes(propertiesPadding[i])) {

                    let styles = ` 
            .${propertiesPadding[i]} { 
                ${valuesPadding[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('sup')) {
        for (var i = 0; i < propertiesPadding.length; i++) {
            for (var a = 0; a < document.querySelectorAll('sup').length; a++) {
                if (document.querySelectorAll('sup')[a].classList.contains(propertiesPadding[i]) && !document.querySelector('style').innerText.includes(propertiesPadding[i])) {

                    let styles = ` 
            .${propertiesPadding[i]} { 
                ${valuesPadding[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('sub')) {
        for (var i = 0; i < propertiesPadding.length; i++) {
            for (var a = 0; a < document.querySelectorAll('sub').length; a++) {
                if (document.querySelectorAll('sub')[a].classList.contains(propertiesPadding[i]) && !document.querySelector('style').innerText.includes(propertiesPadding[i])) {

                    let styles = ` 
            .${propertiesPadding[i]} { 
                ${valuesPadding[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('mark')) {
        for (var i = 0; i < propertiesPadding.length; i++) {
            for (var a = 0; a < document.querySelectorAll('mark').length; a++) {
                if (document.querySelectorAll('mark')[a].classList.contains(propertiesPadding[i]) && !document.querySelector('style').innerText.includes(propertiesPadding[i])) {

                    let styles = ` 
            .${propertiesPadding[i]} { 
                ${valuesPadding[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('code')) {
        for (var i = 0; i < propertiesPadding.length; i++) {
            for (var a = 0; a < document.querySelectorAll('code').length; a++) {
                if (document.querySelectorAll('code')[a].classList.contains(propertiesPadding[i]) && !document.querySelector('style').innerText.includes(propertiesPadding[i])) {

                    let styles = ` 
            .${propertiesPadding[i]} { 
                ${valuesPadding[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('pre')) {
        for (var i = 0; i < propertiesPadding.length; i++) {
            for (var a = 0; a < document.querySelectorAll('pre').length; a++) {
                if (document.querySelectorAll('pre')[a].classList.contains(propertiesPadding[i]) && !document.querySelector('style').innerText.includes(propertiesPadding[i])) {

                    let styles = ` 
            .${propertiesPadding[i]} { 
                ${valuesPadding[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('blockquote')) {
        for (var i = 0; i < propertiesPadding.length; i++) {
            for (var a = 0; a < document.querySelectorAll('blockquote').length; a++) {
                if (document.querySelectorAll('blockquote')[a].classList.contains(propertiesPadding[i]) && !document.querySelector('style').innerText.includes(propertiesPadding[i])) {

                    let styles = ` 
            .${propertiesPadding[i]} { 
                ${valuesPadding[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }

    if (document.querySelector('a')) {
        for (var i = 0; i < propertiesPadding.length; i++) {
            for (var a = 0; a < document.querySelectorAll('a').length; a++) {
                if (document.querySelectorAll('a')[a].classList.contains(propertiesPadding[i]) && !document.querySelector('style').innerText.includes(propertiesPadding[i])) {

                    let styles = ` 
            .${propertiesPadding[i]} { 
                ${valuesPadding[i]}
            }`;

                    document.getElementsByTagName('style')[0].appendChild(document.createTextNode(styles));
                }
            }
        }
    }
}, 300)

// akhir dari pengkondisian - Muhammad Khoirul Huda