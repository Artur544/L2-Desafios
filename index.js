const prompt = require('prompt-sync') ();

var linha_certa; var coluna_certa; var diagonal_certa;
var player = 0
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
    for (c = 0; c < 3 || linha_certa == true; c++)
    {
        if (matriz[linha][coluna] == matriz[linha][c])
        {
            linha_certa = true;
        }
        else
        {
            linha_certa = false;
        }
    }
    if (linha_certa == true)
    {
        return linha_certa;
    }
    else
    {
        for (l = 0; l < 3 || coluna_certa == true; l++)
        {
            if (matriz[linha][coluna] == matriz[l][coluna])
            {
                coluna_certa = true;
            }
            else
            {
                coluna_certa = false;
            }
        }
        if (coluna_certa == true)
        {
            return coluna_certa;
        }
        else
        {
            if ((matriz[0][0] == matriz[1][1] && matriz[0][0] == matriz[2][2]) || (matriz[0][2] == matriz[1][1] && matriz[0][2] == matriz[2][0]))
            {
                diagonal_certa = true;
                return diagonal_certa;
            }
        }
    }    
}

for (q = 0; q < 9; q++)
{
    if (player % 2 == 0)
    {
        simbolo = "X"
    }
    else
    {
        simbolo = "O"
    }
    tentativa = Number(prompt(tela + "\n Jogador " + simbolo + " escolha um espaço livre colocando o número:"))
    NumeroJogada();
    if (tentativa > 0 && tentativa < 10)
    {   
        if (matriz[linha][coluna] != "X" && matriz[linha][coluna] != "O")
        {
            matriz[linha][coluna] = simbolo;
            player += 1
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
    FinalJogo();
    if (linha_certa == true || coluna_certa == true || diagonal_certa == true)
    {
        console.log("Parabéns, o jogador " + simbolo + " venceu!")
    }
}
console.log("Que pena, parece que houve um empate")