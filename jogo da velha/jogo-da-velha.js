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
    
}

for (q = 0; q < 9 || win != 1; q++)
{
    if (player % 2 == 0)
    {
        simbolo = "X"
    }
    else
    {
        simbolo = "O"
    }
    tentativa = Number(prompt(tela + "\nEscolha um espaço livre colocando o número:"))
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
            alert("Este espaço não está livre, tente de novo outro!");
            q -= 1;
        }
    }
    else
    {
        alert("Este espaço não existe, tente de novo um que esteja na tela!");
        q -= 1;
    }
    tela = ("  | ") + linha1.join(" | ") + divisoria + linha2.join(" | ") + divisoria + linha3.join(" | ") + (" |");
}
alert("Empate")