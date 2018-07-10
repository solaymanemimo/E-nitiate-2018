function cool(){
	var image = document.getElementById('ab').src;
	if(image=="https://images.unsplash.com/photo-1457551859869-d4b7ab27184c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0cde65d4f20ca7c32a535b2c8f164be6&auto=format&fit=crop&w=500&q=60")
	{
		document.getElementById('ab').src="https://images.unsplash.com/photo-1531220847861-69e336daffa0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=61c1089e5994112208b80382716c4b69&auto=format&fit=crop&w=1350&q=80";
	}
	else
		{ 
			document.getElementById('ab').src="https://images.unsplash.com/photo-1457551859869-d4b7ab27184c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0cde65d4f20ca7c32a535b2c8f164be6&auto=format&fit=crop&w=500&q=60";
		}
}
