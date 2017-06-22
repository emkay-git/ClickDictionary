
chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
	console.log('ok im in');
	wordR=request.word;
	console.log('word is '+wordR);

	
	findMeaning(wordR);


	
	
});


function findMeaning(word)
{
	
	$.get("http://agile-cliffs-39753.herokuapp.com/?word="+word,function(data){
		console.log(data);

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {meaning: data});
  });
	});

	
}