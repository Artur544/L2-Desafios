const prompt = require('prompt-sync') ();

var linha_certa = true; var coluna_certa = true; var diagonal_certa = true;
var win = false;
var player = 0;
var linha; var coluna;
var divisoria = [" |\n  ------------\n  | "];
var matriz =
[
    linha1 = [1,2,3],
    linha2 = [4,5,6],
    linha3 = [7,8,9]
];
var tela = ("  | ") + linha1.join(" | ") + divisoria + linha2.join(" | ") + divisoria + linha3.join(" | ") + (" |");

function NumeroJogada()
{
    switch (tentativa) 
    {
        case 1: linha = 0, coluna = 0; break; case 4: linha = 1, coluna = 0; break; case 7: linha = 2, coluna = 0; break;
        case 2: linha = 0, coluna = 1; break; case 5: linha = 1, coluna = 1; break; case 8: linha = 2, coluna = 1; break;
        case 3: linha = 0, coluna = 2; break; case 6: linha = 1, coluna = 2; break; case 9: linha = 2, coluna = 2; break;
    }
}

function FinalJogo()
{
    for (c = 2; c >= 0 && linha_certa == false; c--)
    {
        if (matriz[linha][coluna] == matriz[linha][c])
        {
            linha_certa = true;
        }
        else
        {
            linha_certa = false;
            for (l = 0; l < 3 && coluna_certa == false; l++)
            {
                if (matriz[linha][coluna] == matriz[l][coluna])
                {
                    coluna_certa = true;
                }
                else
                {
                    coluna_certa = false;
                    if (coluna_certa == false)
                    {
                        if ((matriz[0][0] == matriz[1][1] && matriz[0][0] == matriz[2][2]) || (matriz[0][2] == matriz[1][1] && matriz[0][2] == matriz[2][0]))
                        {
                            diagonal_certa = true;
                        }
                        else
                        {
                            diagonal_certa = false;
                            win = false;
                        }
                    }
                }
            }
        }
    }
    if (linha_certa == true || coluna_certa == true || diagonal_certa == true)
    {
        win = true;
    }
    return win;
}

for (q = 0; q < 9 && win == false ; q++)
{
    if (player % 2 == 0)
    {
        simbolo = "X";
    }
    else
    {
        simbolo = "O";
    }
    tentativa = Number(prompt(tela + "\n Jogador " + simbolo + " escolha um espaço livre colocando o número: "));
    NumeroJogada();
    if (tentativa > 0 && tentativa < 10)
    {   
        if (matriz[linha][coluna] != "X" && matriz[linha][coluna] != "O")
        {
            matriz[linha][coluna] = simbolo;
            player += 1;
            FinalJogo();
        }
        else
        {
            console.log("Este espaço não está livre, tente de novo outro!");
            q -= 1;
        }
    }
    else
    {
        console.log("Este espaço não existe, tente de novo um que esteja na tela!");
        q -= 1;
    }
    tela = ("  | ") + linha1.join(" | ") + divisoria + linha2.join(" | ") + divisoria + linha3.join(" | ") + (" |");
    if (win == true)
    {
        console.log(tela + "\n Parabéns, o jogador " + simbolo + " venceu!");
    }
}
if (q == 9)
{
    console.log(tela + "\n Que pena, parece que houve um empate");
}