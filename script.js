form = document.querySelector("form");
		textbox = document.getElementById("newItem");
		todoList = document.getElementById("listItems");

		form.addEventListener("submit", process_submit);

		function process_submit()
		{
			event.preventDefault();

			newLi = document.createElement("li");

			newCheck = document.createElement("input");
			newCheck.setAttribute("type", "checkbox");
			newCheck.addEventListener("change", process_check);
			newLi.appendChild(newCheck);

			newTodoText = document.createTextNode(textbox.value);
			newTodo = document.createElement("span");
			newTodo.appendChild(newTodoText);
			newLi.appendChild(newTodo);

			xText = document.createTextNode(" X");
			x = document.createElement("span");
			x.setAttribute("style", "color: red");
			x.appendChild(xText);
			x.addEventListener("click", process_x);
			newLi.appendChild(x);

			todoList.appendChild(newLi);
		}

		function process_x()
		{
			event.srcElement.parentNode.remove();
		}

		function process_check()
		{
			todoItem = event.srcElement.parentNode.children[1];

			if(event.srcElement.checked)
			{
				todoItem.setAttribute("style", "color: green");
			}
			else
			{
				todoItem.setAttribute("style", "");
			}
		}