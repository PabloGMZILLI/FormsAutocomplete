// var before = $('.main')
// var allInputs = document.querySelectorAll('input')

// allInputs.forEach( (e, i) => console.log(e, i) )

$("#btn1").click(function(){
//     $(".main").append(allInputs);
    
    chrome.tabs.executeScript(null, {file:'jquery.js'}, function(result){
        chrome.tabs.executeScript({
            code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
        }, (results) => {
            //Here we have just the innerHTML and not DOM structure
            console.log('Popup script:')
            console.log(results[0]);
        });
    });

    //We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
    
});

function modifyDOM() {
    //You can play with your DOM here or check URL against your regex
    var allInputs = $('input')
    $('input[name=firstName]').focus()
    console.log('Tab inputs:', allInputs);
    // console.log('Tab script:');
    // console.log(document.body);
    return document.body.innerHTML;
}