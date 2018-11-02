# Artifact-Database

It is a JSON database for Artifact, a card game created by Valve (based in Dota 2).

Languages:
- English (en)

# DEPRECATED
❗ This repository won't be updated in favor to [ottah/ArtifactDB](https://github.com/ottah/ArtifactDB)

# Install

```bash
$ npm i Desvelao/artifact-database --save
```

# JSON Schema

# Set Schema
- **name** : string : Name of the card set.
- **name_id** : string : ID name of the card set.
- **symbol** : string : Symbol of the card set.
- **order** : int : Symbol of the card set.
- **releaseDate** : DateTime : Date of release for the set
- **description** : string : Description

# Card Schema

- **name** : the name of the card.
- **id** : Id of the card used for matching it with signature/related cards.
- **type** : int : See [contants/cards_types](https://github.com/Desvelao/artifact-database/constants/cards_types.json).
- **color** : string : **Black/blUe/Green/Red/Yellow** See [contants/cards_colors](https://github.com/Desvelao/artifact-database/constants/cards_colors.json).
- **rarity** : string : **Basic/Common/Uncommon/Rare** See [contants/rarities](https://github.com/Desvelao/artifact-database/constants/rarities.json).
- **text** : string :The raw card text.
- **attack** : int : Attack.
- **armor** : int : Armor.
- **health** : int : Health.
- **goldcost** : int : Cost of buying an item.
- **skills** : array : An array of all abilities/effects for the Hero/Creep/Improvement/Item card. For creeps and improvements their **Text** has been parsed into an ability so it is easier to search for abilities.
  - **name** : string : Name of the ability.
  - **type** : int : See [contants/skills_types](https://github.com/Desvelao/artifact-database/constants/skills_types.json)
  - **text** : string : The description of the effect.
  - **cooldown** : int : Active affect cooldown.
- **manacost** : int : Mana cost for card.
- **getInitiative** : boolean : True if this card gives player initiative. If null/false it cannot.
- **anyLane** : boolean : If true this card can be cast across lanes. If null/false it cannot.
- **token** : boolean : If true this card is a token created by another card.
- **artist** : string : Artist name.
- **lore** : string : Lore description for the card.

# Developers

- [JSONLint](https://jsonlint.com) checks `db.json` files

# Assets

I have a separate repository with assets (card types and card images) for the game, [Desvelao/artifact-assets](https://github.com/Desvelao/artifact-assets)
