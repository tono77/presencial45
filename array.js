	var asdf = [{
			"completed":false,
			"id":1,
			"title":"Delectus aut autem",
		},
		{
			"completed":false,
			"id":2,
			"title":"Quis ut nam facilis et officia qui",
		},
		{
			"completed":false,
			"id":3,
			"title":"Fugiat veniam minus",
		},
		{
			"completed":true,
			"id":4,
			"title":"Et porro tempora",
		},
		{
			"completed":false,
			"id":5,
			"title":"Laboriosam mollitia et enim quasi adipisci quia provident illum",
		},
		{
			"completed":false,
			"id":6,
			"title":"Qui ullam ratione quibusdam voluptatem quia omnis",
		},
		{
			"completed":false,
			"id":7,
			"title":"Illo expedita consequatur quia in",
			"userId":1
		},
		{
			"completed":true,
			"id":8,
			"title":"Quo adipisci enim quam ut ab",
		},
		{
			"completed":false,
			"id":9,
			"title":"Molestiae perspiciatis ipsa",
		},
		{
			"completed":true,
			"id":10,
			"title":"Illo est ratione doloremque quia maiores aut",
		}];

		var completed=[];
		var uncompleted=[];

		completed = asdf.filter(function(item){
  	return (item.completed  == true);
		});

		uncompleted = asdf.filter(function(item){
  	return (item.completed  == false);
		});

	  var parent_tag = document.getElementById('done');
    completed.map(function(x){
      var doc_element = document.createElement("li");
      node = document.createTextNode(x.title);
      doc_element.appendChild(node);
      parent_tag.appendChild(doc_element);
      // console.log(parent_tag);
    });
		


		
		// console.log(completed);
		// console.log(uncompleted);