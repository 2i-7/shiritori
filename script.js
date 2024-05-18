//要素を取得
const output = document.getElementById('output');
const input = document.getElementById('input');
const errorMessage = document.getElementById('errorMessage');

//値を入力されたら(何かキーを押されたら)確認する
input.addEventListener('keydown', function(event){
    //Enterが押されたとき
    if(event.key === 'Enter'){
        //要素の値を取得
        const outputWord = output.innerHTML;
        const inputWord = input.value;

        //その値を配列として1文字ずつバラバラに取得する
        const outpuWordText = outputWord.split('');
        const inpuWordText = inputWord.split('');

        if(outpuWordText[outpuWordText.length - 1] == inpuWordText[0]){
            //同じ単語だった場合はここに入力
            output.innerHTML = input.value;
            input.value = '';
            errorMessage.style.display = 'none';
        }
        else{
            errorMessage.style.display = 'block';
        }
    }
});


