import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
* {
	box-sizing: border-box;
}
    
body {
  font-family: "IBM Plex Sans KR", sans-serif;
  background-color: #edf1d6;
}

ol, ul {
	list-style: none;
}

a{
	text-decoration: none;
	color: inherit;

	&:hover {
    	text-decoration: none;
		color: none;
	}
    
	&:active {
    	text-decoration: none;
		color: black;
	}
        
    &:visited {
    	text-decoration: none;
		color: black;
	}
        
	&:link {
    	text-decoration: none;
		color: black; 
	}
}
`;
