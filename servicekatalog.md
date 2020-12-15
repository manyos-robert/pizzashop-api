
Der Service Katalog liefert eine Liste der bestellbaren Pizzen.

Um den Katalog schnell erweiterbar zu machen, wird dieser als JSON File abgelegt.

Folgende Struktur wäre denkbar:

```javascript
[
  {
    "name": "Pizza Salami",
    "description": "Frischer Pizzateig, Tomatensauce, frisch geriebener Käse, Salami",
    "variants": [
      {
        "name": "Single",
        "description": "33cm",
        "price": 7.9
      },
      {
        "name": "Double",
        "description": "33cm",
        "price": 11.5
      },
      {
        "name": "Magnum",
        "description": "33cm",
        "price": 17.5
      }
    ]
  }
]
```
