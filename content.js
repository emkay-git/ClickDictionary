console.log("Welcome to Word Meaning extension");




function getWord() {
    var txt = '';
    if (window.getSelection) {
        txt = window.getSelection();
    } else if (document.getSelection) {
        txt = document.getSelection();
    } else if (document.selection) {
        txt = document.selection.createRange().text;
    }
   // console.log("the text is "+ txt);
    return txt.toString();
    

}



var clicks = '';
var t = '';
window.addEventListener('click', function (evt) {


    if(evt.detail === 2)
    {
       clicks = 2;
        t = getWord();
    console.log("word is "+t);
   ;
  
  if(t.length>1)
   chrome.runtime.sendMessage({word:t},function(response){
    
});

    }
    else
    {
        clicks = 3;
    }
});





//previously getting double clicks as follows... not supporting triple clicks
// $(document).dblclick(function(e) {
//      t = getWord();
//     console.log("word is "+t);
//     console.log(e);
  
//   if(t.length>1)
//    chrome.runtime.sendMessage({word:t},function(response){
    
// });
    
//  });

chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
    //console.log('ok im in');
    meaning=request.meaning;
    //console.log(meaning);
   // if(meaning===null)
    jsonMeaning=JSON.parse(meaning);
    console.log(meaning);
    var flag=false;
    //var formattedMeaning='Meanings\n';

  // var formattedMeaning=t+'<br>';
  var formattedMeaning='<p style="font-size: 20px; line-height: 150%">';
    if(meaning!=='null' && typeof jsonMeaning != 'undefined')
    {
flag=true;
    if(typeof jsonMeaning["Verb"] !='undefined' && jsonMeaning["Verb"].length!=0)
       {   
         formattedMeaning+="Verb<br>"
        for(i=1;i<=Math.min(jsonMeaning["Verb"].length,6);i++)
            {
                formattedMeaning+=i+") "+jsonMeaning["Verb"][i-1];
        if(jsonMeaning["Verb"][i-1].indexOf('(')>-1)
            formattedMeaning+=')'+"<br>";
else formattedMeaning+="<br>";
        }
        formattedMeaning+="<br>";
    }

    if(typeof jsonMeaning["Noun"] !='undefined' && jsonMeaning["Noun"].length!=0)
    {   flag=true;
         formattedMeaning+="Noun<br>"
        for(i=1;i<=Math.min(jsonMeaning["Noun"].length,6);i++)
        {
            formattedMeaning+=i+") "+jsonMeaning["Noun"][i-1];
        if(jsonMeaning["Noun"][i-1].indexOf('(')>-1)
            formattedMeaning+=')'+"<br>";
else formattedMeaning+="<br>";
        }
        formattedMeaning+="<br>";
        
    }
    
       // formattedMeaning+="Verb Section<br>"+jsonMeaning["Verb"]+"<br>";
    if(typeof jsonMeaning["Adjective"]!= 'undefined' && jsonMeaning["Adjective"].length!=0)
        {   flag=true;
         formattedMeaning+="Adjective<br>"
        for(i=1;i<=Math.min(jsonMeaning["Adjective"].length,6);i++)
        {
            formattedMeaning+=i+") "+jsonMeaning["Adjective"][i-1];
        if(jsonMeaning["Adjective"][i-1].indexOf('(')>-1)       
            formattedMeaning+=')'+"<br>";
            else formattedMeaning+="<br>";
        }
        formattedMeaning+="<br>"
    }
        //formattedMeaning+="Adjective Section<br>"+jsonMeaning["Adjective"]+"<br>";
    if(typeof jsonMeaning["Adverb"]!= 'undefined' && jsonMeaning["Adverb"].length!=0)
        {   flag=true;
         formattedMeaning+="Adverb<br>"
        for(i=1;i<=Math.min(jsonMeaning["Adverb"].length,6);i++)
        {
            formattedMeaning+=i+") "+jsonMeaning["Adverb"][i-1];
        if(jsonMeaning["Adverb"][i-1].indexOf('(')>-1)       
            formattedMeaning+=')'+"<br>";
            else formattedMeaning+="<br>";
        }
    }

    }

    if(flag!=true)
        formattedMeaning+="No meanings found. Sorry!";

    if(clicks==2)
    {   
            $.jAlert({
        'title':t,
        'content': formattedMeaning+'</p>',
        'theme': 'gray',
        'size': 'auto',
        'closeOnClick': true
     });
     }

     //alert(formattedMeaning);
     
   
    
});



