#!/bin/sh

# all my plugins
cloneifexist() {
	git clone https://github.com/w0rp/ale.git;
	git clone https://github.com/morhetz/gruvbox.git;
	git clone https://github.com/ervandew/supertab.git;
	git clone https://github.com/othree/javascript-libraries-syntax.vim.git;
	git clone https://github.com/vim-scripts/SyntaxComplete.git;
	git clone https://github.com/SirVer/ultisnips.git;
	git clone https://github.com/pangloss/vim-javascript.git;
	git clone https://github.com/honza/vim-snippets.git;
	git clone https://github.com/iloginow/vim-stylus.git;
	git clone https://github.com/posva/vim-vue.git;
	git clone https://github.com/Valloric/YouCompleteMe.git;
};

# clone plugins
echo "Cloning plugins from git repos"
cd plugins && cloneifexist
