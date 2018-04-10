# Frontend-voor-Designers

## Toepassing
Er is een progress-indicator toegevoegd die aangeeft bij welke slide de bezoeker op dat moment is. Ook kan de bezoeker door middel van de bolletjes navigeren door de verschillende slides.

## Getest
Er is getest naar de duidelijkheid van de bolletjes. Met name of de bolletjes duidelijk aangeven bij welke slide de gebruiker is.

Na het testen heb werd de conclusie getrokken dat de bolletjes niet optimaal werken omdat het slide twee overslaat wanneer er van slide één naar slide drie wordt genavigeerd. Dit komt omdat de slides dan langs slide twee gaan, maar de bolletjes slaan bolletje twee over.

Dit komt doordat de bolletjes veranderen op basis van de counter en niet van het getoonde beeld.

## Principes
### One primary action per screen
Wanneer de gebruiker naar beneden scrollt zal de gebruiker een sectie vinden welke 100vh en 100vw hoog en breed is. DIt wil zeggen dat ze op elke pagina één stukje tekst zullen vinden. Elke stukje tekst heeft één knop. Deze knop is dus de enige primaire actie per scherm.

![alt text](https://github.com/BrianJakobs/frontendvoordesigners/blob/master/opdracht2/v6/assets/images/scherm2.png "One primary action")

Ook verdwijnt de header boven aan de pagina, hierdoor is de primaire actie op het begin scherm om de slider te gebruiken.

### Provide a natural next step
De slider heeft knoppen waarmee genavigeerd kan worden, deze knoppen zijn de logische volgende stappen. Ook is de knop bij elk stukje tekst een logisch volgende stap omdat het een 'lees meer' knop is.

![alt text](https://github.com/BrianJakobs/frontendvoordesigners/blob/master/opdracht2/v6/assets/images/scherm1.png "One primary action")

### Progressive disclosure
Omdat ik er voor kies niet alle info direct te laten zien, maar beschikbaar maak achter een knop, pas ik progressive disclosure toe. Ook laat ik in mijn slider slechts één afbeelding zien, waarna er meer te zien is wanneer er wordt genavigeerd naar de volgende afbeelding.

[Demo versie 6](https://BrianJakobs.github.io/frontendvoordesigners/opdracht2/v6/)