var player = 0
var divisoria = [" |\n  ------------\n  | "];
var matriz =
[
    linha1 = ["1","2","3"],
    linha2 = ["4","5","6"],
    linha3 = ["7","8","9"]
]
var tela = ("  | ") + linha1.join(" | ") + divisoria + linha2.join(" | ") + divisoria + linha3.join(" | ") + (" |");

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
    player += 1
    tentativa = Number(prompt(tela + "\nEscolha um espaço livre colocando o número:"))
    if (tentativa > 0 && tentativa < 10)
    {
        if (tentativa < 4)
        {
            if (matriz[0][tentativa - 1] != "X" && matriz[0][tentativa - 1] != "O")
            {
                matriz[0][tentativa - 1] = simbolo
            }
            else
            {
                alert("Este espaço não está livre, tente de novo outro!")
                q -= 1
                player -= 1
            }
        }
        else if (tentativa < 7)
        {
            if (matriz[1][tentativa - 1] != "X" && matriz[1][tentativa - 1] != "O")
            {
                matriz[1][tentativa - 1] = simbolo
            }
            else
            {
                alert("Este espaço não está livre, tente de novo outro!")
                q -= 1
                player -= 1
            }
        }
        else
        {
            if (matriz[2][tentativa - 1] != "X" && matriz[2][tentativa - 1] != "O")
            {
                matriz[2][tentativa - 1] = simbolo
            }
            else
            {
                alert("Este espaço não está livre, tente de novo outro!")
                q -= 1
                player -= 1
            }
        }
    }
    tela = ("  | ") + linha1.join(" | ") + divisoria + linha2.join(" | ") + divisoria + linha3.join(" | ") + (" |");
}
alert("Empate")