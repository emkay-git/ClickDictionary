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

$(document).dblclick(function(e) {
    var t = getWord();
    console.log("word is "+t);
  
  
  if(t.length!=0)
   chrome.runtime.sendMessage({word:t},function(response){
    
});
    
 });

chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
    //console.log('ok im in');
    meaning=request.meaning;
    //console.log(meaning);
   // if(meaning===null)
    jsonMeaning=JSON.parse(meaning);
    console.log(meaning);
    var formattedMeaning='Meanings\n';
    if(meaning!=='null' && typeof jsonMeaning != 'undefined')
    {

    if(typeof jsonMeaning["Verb"] !='undefined' && jsonMeaning["Verb"].length!=0)
       {   
         formattedMeaning+="Verb\n"
        for(i=1;i<=Math.min(jsonMeaning["Verb"].length,6);i++)
            {
                formattedMeaning+=i+") "+jsonMeaning["Verb"][i-1];
        if(jsonMeaning["Verb"][i-1].indexOf('(')>-1)
            formattedMeaning+=')'+"\n";
else formattedMeaning+="\n";
        }
        formattedMeaning+="\n";
    }

    if(typeof jsonMeaning["Noun"] !='undefined' && jsonMeaning["Noun"].length!=0)
    {   
         formattedMeaning+="Noun\n"
        for(i=1;i<=Math.min(jsonMeaning["Noun"].length,6);i++)
        {
            formattedMeaning+=i+") "+jsonMeaning["Noun"][i-1];
        if(jsonMeaning["Noun"][i-1].indexOf('(')>-1)
            formattedMeaning+=')'+"\n";
else formattedMeaning+="\n";
        }
        formattedMeaning+="\n";
        
    }
    
       // formattedMeaning+="Verb Section\n"+jsonMeaning["Verb"]+"\n";
    if(typeof jsonMeaning["Adjective"]!= 'undefined' && jsonMeaning["Adjective"].length!=0)
        {   
         formattedMeaning+="Adjective\n"
        for(i=1;i<=Math.min(jsonMeaning["Adjective"].length,6);i++)
        {
            formattedMeaning+=i+") "+jsonMeaning["Adjective"][i-1];
        if(jsonMeaning["Adjective"][i-1].indexOf('(')>-1)       
            formattedMeaning+=')'+"\n";
            else formattedMeaning+="\n";
        }
    }
        //formattedMeaning+="Adjective Section\n"+jsonMeaning["Adjective"]+"\n";
    }
   
     alert(formattedMeaning);
   
    
});