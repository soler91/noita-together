/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/light";

const $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  NT: {
    nested: {
      Envelope: {
        oneofs: {
          kind: {
            oneof: [
              "gameAction",
              "lobbyAction"
            ]
          }
        },
        fields: {
          gameAction: {
            type: "GameAction",
            id: 1
          },
          lobbyAction: {
            type: "LobbyAction",
            id: 50
          }
        }
      },
      GameAction: {
        oneofs: {
          action: {
            oneof: [
              "cPlayerMove",
              "sPlayerMove",
              "cPlayerUpdate",
              "sPlayerUpdate",
              "cPlayerUpdateInventory",
              "sPlayerUpdateInventory",
              "cHostItemBank",
              "sHostItemBank",
              "cHostUserTake",
              "sHostUserTake",
              "cHostUserTakeGold",
              "sHostUserTakeGold",
              "cPlayerAddGold",
              "sPlayerAddGold",
              "cPlayerTakeGold",
              "sPlayerTakeGold",
              "cPlayerAddItem",
              "sPlayerAddItem",
              "cPlayerTakeItem",
              "sPlayerTakeItem",
              "cPlayerPickup",
              "sPlayerPickup",
              "cNemesisAbility",
              "sNemesisAbility",
              "cNemesisPickupItem",
              "sNemesisPickupItem",
              "cChat",
              "sChat",
              "cPlayerDeath",
              "sPlayerDeath",
              "cPlayerNewGamePlus",
              "sPlayerNewGamePlus",
              "cPlayerSecretHourglass",
              "SPlayerSecretHourglass",
              "cCustomModEvent",
              "sCustomModEvent",
              "cRespawnPenalty",
              "sRespawnPenalty",
              "cAngerySteve",
              "sAngerySteve",
              "sPlayerPos"
            ]
          }
        },
        fields: {
          cPlayerMove: {
            type: "ClientPlayerMove",
            id: 1
          },
          sPlayerMove: {
            type: "ServerPlayerMove",
            id: 2
          },
          cPlayerUpdate: {
            type: "ClientPlayerUpdate",
            id: 3
          },
          sPlayerUpdate: {
            type: "ServerPlayerUpdate",
            id: 4
          },
          cPlayerUpdateInventory: {
            type: "ClientPlayerUpdateInventory",
            id: 5
          },
          sPlayerUpdateInventory: {
            type: "ServerPlayerUpdateInventory",
            id: 6
          },
          cHostItemBank: {
            type: "ClientHostItemBank",
            id: 7
          },
          sHostItemBank: {
            type: "ServerHostItemBank",
            id: 8
          },
          cHostUserTake: {
            type: "ClientHostUserTake",
            id: 9
          },
          sHostUserTake: {
            type: "ServerHostUserTake",
            id: 10
          },
          cHostUserTakeGold: {
            type: "ClientHostUserTakeGold",
            id: 11
          },
          sHostUserTakeGold: {
            type: "ServerHostUserTakeGold",
            id: 12
          },
          cPlayerAddGold: {
            type: "ClientPlayerAddGold",
            id: 13
          },
          sPlayerAddGold: {
            type: "ServerPlayerAddGold",
            id: 14
          },
          cPlayerTakeGold: {
            type: "ClientPlayerTakeGold",
            id: 15
          },
          sPlayerTakeGold: {
            type: "ServerPlayerTakeGold",
            id: 16
          },
          cPlayerAddItem: {
            type: "ClientPlayerAddItem",
            id: 17
          },
          sPlayerAddItem: {
            type: "ServerPlayerAddItem",
            id: 18
          },
          cPlayerTakeItem: {
            type: "ClientPlayerTakeItem",
            id: 19
          },
          sPlayerTakeItem: {
            type: "ServerPlayerTakeItem",
            id: 20
          },
          cPlayerPickup: {
            type: "ClientPlayerPickup",
            id: 21
          },
          sPlayerPickup: {
            type: "ServerPlayerPickup",
            id: 22
          },
          cNemesisAbility: {
            type: "ClientNemesisAbility",
            id: 23
          },
          sNemesisAbility: {
            type: "ServerNemesisAbility",
            id: 24
          },
          cNemesisPickupItem: {
            type: "ClientNemesisPickupItem",
            id: 25
          },
          sNemesisPickupItem: {
            type: "ServerNemesisPickupItem",
            id: 26
          },
          cChat: {
            type: "ClientChat",
            id: 27
          },
          sChat: {
            type: "ServerChat",
            id: 28
          },
          cPlayerDeath: {
            type: "ClientPlayerDeath",
            id: 29
          },
          sPlayerDeath: {
            type: "ServerPlayerDeath",
            id: 30
          },
          cPlayerNewGamePlus: {
            type: "ClientPlayerNewGamePlus",
            id: 31
          },
          sPlayerNewGamePlus: {
            type: "ServerPlayerNewGamePlus",
            id: 32
          },
          cPlayerSecretHourglass: {
            type: "ClientPlayerSecretHourglass",
            id: 33
          },
          SPlayerSecretHourglass: {
            type: "ServerPlayerSecretHourglass",
            id: 34
          },
          cCustomModEvent: {
            type: "ClientCustomModEvent",
            id: 35
          },
          sCustomModEvent: {
            type: "ServerCustomModEvent",
            id: 36
          },
          cRespawnPenalty: {
            type: "ClientRespawnPenalty",
            id: 37
          },
          sRespawnPenalty: {
            type: "ServerRespawnPenalty",
            id: 38
          },
          cAngerySteve: {
            type: "ClientAngerySteve",
            id: 39
          },
          sAngerySteve: {
            type: "ServerAngerySteve",
            id: 40
          },
          sPlayerPos: {
            type: "ServerPlayerPos",
            id: 41
          }
        }
      },
      PlayerFrame: {
        oneofs: {
          _x: {
            oneof: [
              "x"
            ]
          },
          _y: {
            oneof: [
              "y"
            ]
          },
          _armR: {
            oneof: [
              "armR"
            ]
          },
          _armScaleY: {
            oneof: [
              "armScaleY"
            ]
          },
          _scaleX: {
            oneof: [
              "scaleX"
            ]
          },
          _anim: {
            oneof: [
              "anim"
            ]
          },
          _held: {
            oneof: [
              "held"
            ]
          }
        },
        fields: {
          x: {
            type: "float",
            id: 1,
            options: {
              proto3_optional: true
            }
          },
          y: {
            type: "float",
            id: 2,
            options: {
              proto3_optional: true
            }
          },
          armR: {
            type: "float",
            id: 3,
            options: {
              proto3_optional: true
            }
          },
          armScaleY: {
            type: "float",
            id: 4,
            options: {
              proto3_optional: true
            }
          },
          scaleX: {
            type: "float",
            id: 5,
            options: {
              proto3_optional: true
            }
          },
          anim: {
            type: "int32",
            id: 6,
            options: {
              proto3_optional: true
            }
          },
          held: {
            type: "int32",
            id: 7,
            options: {
              proto3_optional: true
            }
          }
        }
      },
      ServerPlayerPos: {
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          x: {
            type: "float",
            id: 2
          },
          y: {
            type: "float",
            id: 3
          }
        }
      },
      ClientPlayerMove: {
        fields: {
          frames: {
            rule: "repeated",
            type: "PlayerFrame",
            id: 1
          }
        }
      },
      ServerPlayerMove: {
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          frames: {
            rule: "repeated",
            type: "PlayerFrame",
            id: 2
          }
        }
      },
      ClientPlayerUpdate: {
        oneofs: {
          _curHp: {
            oneof: [
              "curHp"
            ]
          },
          _maxHp: {
            oneof: [
              "maxHp"
            ]
          },
          _location: {
            oneof: [
              "location"
            ]
          },
          _sampo: {
            oneof: [
              "sampo"
            ]
          }
        },
        fields: {
          curHp: {
            type: "float",
            id: 1,
            options: {
              proto3_optional: true
            }
          },
          maxHp: {
            type: "float",
            id: 2,
            options: {
              proto3_optional: true
            }
          },
          location: {
            type: "string",
            id: 3,
            options: {
              proto3_optional: true
            }
          },
          sampo: {
            type: "bool",
            id: 4,
            options: {
              proto3_optional: true
            }
          }
        }
      },
      ServerPlayerUpdate: {
        oneofs: {
          _curHp: {
            oneof: [
              "curHp"
            ]
          },
          _maxHp: {
            oneof: [
              "maxHp"
            ]
          },
          _location: {
            oneof: [
              "location"
            ]
          },
          _sampo: {
            oneof: [
              "sampo"
            ]
          }
        },
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          curHp: {
            type: "float",
            id: 2,
            options: {
              proto3_optional: true
            }
          },
          maxHp: {
            type: "float",
            id: 3,
            options: {
              proto3_optional: true
            }
          },
          location: {
            type: "string",
            id: 4,
            options: {
              proto3_optional: true
            }
          },
          sampo: {
            type: "bool",
            id: 5,
            options: {
              proto3_optional: true
            }
          }
        }
      },
      ClientPlayerUpdateInventory: {
        fields: {
          wands: {
            rule: "repeated",
            type: "InventoryWand",
            id: 1
          },
          items: {
            rule: "repeated",
            type: "InventoryItem",
            id: 2
          },
          spells: {
            rule: "repeated",
            type: "InventorySpell",
            id: 3
          }
        },
        nested: {
          InventoryWand: {
            fields: {
              index: {
                type: "uint32",
                id: 1
              },
              wand: {
                type: "Wand",
                id: 2
              }
            }
          },
          InventoryItem: {
            fields: {
              index: {
                type: "uint32",
                id: 3
              },
              item: {
                type: "Item",
                id: 4
              }
            }
          },
          InventorySpell: {
            fields: {
              index: {
                type: "uint32",
                id: 1
              },
              spell: {
                type: "Spell",
                id: 2
              }
            }
          }
        }
      },
      ServerPlayerUpdateInventory: {
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          wands: {
            rule: "repeated",
            type: "InventoryWand",
            id: 2
          },
          items: {
            rule: "repeated",
            type: "InventoryItem",
            id: 3
          },
          spells: {
            rule: "repeated",
            type: "InventorySpell",
            id: 4
          }
        },
        nested: {
          InventoryWand: {
            fields: {
              index: {
                type: "uint32",
                id: 1
              },
              wand: {
                type: "Wand",
                id: 2
              }
            }
          },
          InventoryItem: {
            fields: {
              index: {
                type: "uint32",
                id: 1
              },
              item: {
                type: "Item",
                id: 2
              }
            }
          },
          InventorySpell: {
            fields: {
              index: {
                type: "uint32",
                id: 1
              },
              spell: {
                type: "Spell",
                id: 2
              }
            }
          }
        }
      },
      ClientHostItemBank: {
        fields: {
          wands: {
            rule: "repeated",
            type: "Wand",
            id: 1
          },
          spells: {
            rule: "repeated",
            type: "Spell",
            id: 2
          },
          items: {
            rule: "repeated",
            type: "Item",
            id: 3
          },
          gold: {
            type: "uint32",
            id: 4
          },
          objects: {
            rule: "repeated",
            type: "EntityItem",
            id: 5
          }
        }
      },
      ServerHostItemBank: {
        fields: {
          wands: {
            rule: "repeated",
            type: "Wand",
            id: 1
          },
          spells: {
            rule: "repeated",
            type: "Spell",
            id: 2
          },
          items: {
            rule: "repeated",
            type: "Item",
            id: 3
          },
          gold: {
            type: "uint32",
            id: 4
          },
          objects: {
            rule: "repeated",
            type: "EntityItem",
            id: 5
          }
        }
      },
      ClientHostUserTake: {
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          id: {
            type: "string",
            id: 2
          },
          success: {
            type: "bool",
            id: 3
          }
        }
      },
      ServerHostUserTake: {
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          id: {
            type: "string",
            id: 2
          },
          success: {
            type: "bool",
            id: 3
          }
        }
      },
      ClientHostUserTakeGold: {
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          amount: {
            type: "uint32",
            id: 2
          },
          success: {
            type: "bool",
            id: 3
          }
        }
      },
      ServerHostUserTakeGold: {
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          amount: {
            type: "uint32",
            id: 2
          },
          success: {
            type: "bool",
            id: 3
          }
        }
      },
      ClientPlayerAddGold: {
        fields: {
          amount: {
            type: "uint32",
            id: 1
          }
        }
      },
      ServerPlayerAddGold: {
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          amount: {
            type: "uint32",
            id: 2
          }
        }
      },
      ClientPlayerTakeGold: {
        fields: {
          amount: {
            type: "uint32",
            id: 1
          }
        }
      },
      ServerPlayerTakeGold: {
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          amount: {
            type: "uint32",
            id: 2
          }
        }
      },
      ClientPlayerAddItem: {
        oneofs: {
          item: {
            oneof: [
              "spells",
              "wands",
              "flasks",
              "objects"
            ]
          }
        },
        fields: {
          spells: {
            type: "Spells",
            id: 1
          },
          wands: {
            type: "Wands",
            id: 2
          },
          flasks: {
            type: "Items",
            id: 3
          },
          objects: {
            type: "Entities",
            id: 4
          }
        },
        nested: {
          Spells: {
            fields: {
              list: {
                rule: "repeated",
                type: "Spell",
                id: 1
              }
            }
          },
          Wands: {
            fields: {
              list: {
                rule: "repeated",
                type: "Wand",
                id: 1
              }
            }
          },
          Items: {
            fields: {
              list: {
                rule: "repeated",
                type: "Item",
                id: 1
              }
            }
          },
          Entities: {
            fields: {
              list: {
                rule: "repeated",
                type: "EntityItem",
                id: 1
              }
            }
          }
        }
      },
      ServerPlayerAddItem: {
        oneofs: {
          item: {
            oneof: [
              "spells",
              "wands",
              "flasks",
              "objects"
            ]
          }
        },
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          spells: {
            type: "Spells",
            id: 2
          },
          wands: {
            type: "Wands",
            id: 3
          },
          flasks: {
            type: "Items",
            id: 4
          },
          objects: {
            type: "Entities",
            id: 5
          }
        },
        nested: {
          Spells: {
            fields: {
              list: {
                rule: "repeated",
                type: "Spell",
                id: 1
              }
            }
          },
          Wands: {
            fields: {
              list: {
                rule: "repeated",
                type: "Wand",
                id: 2
              }
            }
          },
          Items: {
            fields: {
              list: {
                rule: "repeated",
                type: "Item",
                id: 3
              }
            }
          },
          Entities: {
            fields: {
              list: {
                rule: "repeated",
                type: "EntityItem",
                id: 4
              }
            }
          }
        }
      },
      ClientPlayerTakeItem: {
        fields: {
          id: {
            type: "string",
            id: 1
          }
        }
      },
      ServerPlayerTakeItem: {
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          id: {
            type: "string",
            id: 2
          }
        }
      },
      ClientChat: {
        fields: {
          message: {
            type: "string",
            id: 1
          }
        }
      },
      ServerChat: {
        fields: {
          id: {
            type: "string",
            id: 1
          },
          userId: {
            type: "string",
            id: 2
          },
          name: {
            type: "string",
            id: 3
          },
          message: {
            type: "string",
            id: 4
          }
        }
      },
      ClientPlayerPickup: {
        oneofs: {
          kind: {
            oneof: [
              "heart",
              "orb"
            ]
          }
        },
        fields: {
          heart: {
            type: "HeartPickup",
            id: 1
          },
          orb: {
            type: "OrbPickup",
            id: 2
          }
        },
        nested: {
          HeartPickup: {
            fields: {
              hpPerk: {
                type: "bool",
                id: 1
              }
            }
          },
          OrbPickup: {
            fields: {
              id: {
                type: "uint32",
                id: 1
              }
            }
          }
        }
      },
      ServerPlayerPickup: {
        oneofs: {
          kind: {
            oneof: [
              "heart",
              "orb"
            ]
          }
        },
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          heart: {
            type: "HeartPickup",
            id: 2
          },
          orb: {
            type: "OrbPickup",
            id: 3
          }
        },
        nested: {
          HeartPickup: {
            fields: {
              hpPerk: {
                type: "bool",
                id: 1
              }
            }
          },
          OrbPickup: {
            fields: {
              id: {
                type: "uint32",
                id: 1
              }
            }
          }
        }
      },
      ClientNemesisPickupItem: {
        fields: {
          gameId: {
            type: "string",
            id: 1
          }
        }
      },
      ServerNemesisPickupItem: {
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          gameId: {
            type: "string",
            id: 2
          }
        }
      },
      ClientNemesisAbility: {
        fields: {
          gameId: {
            type: "string",
            id: 1
          }
        }
      },
      ServerNemesisAbility: {
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          gameId: {
            type: "string",
            id: 2
          }
        }
      },
      ClientPlayerDeath: {
        oneofs: {
          _gameTime: {
            oneof: [
              "gameTime"
            ]
          }
        },
        fields: {
          isWin: {
            type: "bool",
            id: 1
          },
          gameTime: {
            type: "uint32",
            id: 2,
            options: {
              proto3_optional: true
            }
          }
        }
      },
      ServerPlayerDeath: {
        oneofs: {
          _gameTime: {
            oneof: [
              "gameTime"
            ]
          }
        },
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          isWin: {
            type: "bool",
            id: 2
          },
          gameTime: {
            type: "uint32",
            id: 3,
            options: {
              proto3_optional: true
            }
          }
        }
      },
      ClientPlayerNewGamePlus: {
        fields: {
          amount: {
            type: "uint32",
            id: 1
          }
        }
      },
      ServerPlayerNewGamePlus: {
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          amount: {
            type: "uint32",
            id: 2
          }
        }
      },
      ClientPlayerSecretHourglass: {
        fields: {
          material: {
            type: "string",
            id: 1
          }
        }
      },
      ServerPlayerSecretHourglass: {
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          material: {
            type: "string",
            id: 2
          }
        }
      },
      ClientCustomModEvent: {
        fields: {
          payload: {
            type: "string",
            id: 1
          }
        }
      },
      ServerCustomModEvent: {
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          payload: {
            type: "string",
            id: 2
          }
        }
      },
      ClientRespawnPenalty: {
        fields: {
          deaths: {
            type: "uint32",
            id: 1
          }
        }
      },
      ServerRespawnPenalty: {
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          deaths: {
            type: "uint32",
            id: 2
          }
        }
      },
      ClientAngerySteve: {
        fields: {
          idk: {
            type: "bool",
            id: 1
          }
        }
      },
      ServerAngerySteve: {
        fields: {
          userId: {
            type: "string",
            id: 1
          }
        }
      },
      Wand: {
        oneofs: {
          _sentBy: {
            oneof: [
              "sentBy"
            ]
          },
          _contributedBy: {
            oneof: [
              "contributedBy"
            ]
          }
        },
        fields: {
          id: {
            type: "string",
            id: 1
          },
          stats: {
            type: "WandStats",
            id: 2
          },
          alwaysCast: {
            rule: "repeated",
            type: "Spell",
            id: 3
          },
          deck: {
            rule: "repeated",
            type: "Spell",
            id: 4
          },
          sentBy: {
            type: "string",
            id: 5,
            options: {
              proto3_optional: true
            }
          },
          contributedBy: {
            type: "string",
            id: 6,
            options: {
              proto3_optional: true
            }
          }
        },
        nested: {
          WandStats: {
            fields: {
              sprite: {
                type: "string",
                id: 1
              },
              named: {
                type: "bool",
                id: 2
              },
              uiName: {
                type: "string",
                id: 3
              },
              manaMax: {
                type: "float",
                id: 4
              },
              manaChargeSpeed: {
                type: "float",
                id: 5
              },
              reloadTime: {
                type: "int32",
                id: 6
              },
              actionsPerRound: {
                type: "uint32",
                id: 7
              },
              deckCapacity: {
                type: "uint32",
                id: 8
              },
              shuffleDeckWhenEmpty: {
                type: "bool",
                id: 9
              },
              spreadDegrees: {
                type: "float",
                id: 10
              },
              speedMultiplier: {
                type: "float",
                id: 11
              },
              fireRateWait: {
                type: "int32",
                id: 12
              },
              tipX: {
                type: "float",
                id: 13
              },
              tipY: {
                type: "float",
                id: 14
              },
              gripX: {
                type: "float",
                id: 15
              },
              gripY: {
                type: "float",
                id: 16
              }
            }
          }
        }
      },
      Spell: {
        oneofs: {
          _sentBy: {
            oneof: [
              "sentBy"
            ]
          },
          _contributedBy: {
            oneof: [
              "contributedBy"
            ]
          }
        },
        fields: {
          id: {
            type: "string",
            id: 1
          },
          gameId: {
            type: "string",
            id: 2
          },
          sentBy: {
            type: "string",
            id: 3,
            options: {
              proto3_optional: true
            }
          },
          contributedBy: {
            type: "string",
            id: 4,
            options: {
              proto3_optional: true
            }
          },
          usesRemaining: {
            type: "int32",
            id: 5
          }
        }
      },
      Item: {
        oneofs: {
          _sentBy: {
            oneof: [
              "sentBy"
            ]
          },
          _contributedBy: {
            oneof: [
              "contributedBy"
            ]
          }
        },
        fields: {
          id: {
            type: "string",
            id: 1
          },
          color: {
            type: "Color",
            id: 2
          },
          content: {
            rule: "repeated",
            type: "Material",
            id: 3
          },
          sentBy: {
            type: "string",
            id: 4,
            options: {
              proto3_optional: true
            }
          },
          contributedBy: {
            type: "string",
            id: 5,
            options: {
              proto3_optional: true
            }
          },
          isChest: {
            type: "bool",
            id: 6
          }
        },
        nested: {
          Color: {
            fields: {
              r: {
                type: "float",
                id: 1
              },
              g: {
                type: "float",
                id: 2
              },
              b: {
                type: "float",
                id: 3
              }
            }
          },
          Material: {
            fields: {
              id: {
                type: "uint32",
                id: 1
              },
              amount: {
                type: "uint32",
                id: 2
              }
            }
          }
        }
      },
      EntityItem: {
        oneofs: {
          _sentBy: {
            oneof: [
              "sentBy"
            ]
          }
        },
        fields: {
          id: {
            type: "string",
            id: 1
          },
          path: {
            type: "string",
            id: 2
          },
          sprite: {
            type: "string",
            id: 3
          },
          sentBy: {
            type: "string",
            id: 4,
            options: {
              proto3_optional: true
            }
          }
        }
      },
      LobbyAction: {
        oneofs: {
          action: {
            oneof: [
              "cRoomCreate",
              "sRoomCreated",
              "sRoomCreateFailed",
              "cRoomUpdate",
              "sRoomUpdated",
              "sRoomUpdateFailed",
              "cRoomFlagsUpdate",
              "sRoomFlagsUpdated",
              "sRoomFlagsUpdateFailed",
              "cRoomDelete",
              "sRoomDeleted",
              "cJoinRoom",
              "sJoinRoomSuccess",
              "sJoinRoomFailed",
              "sUserJoinedRoom",
              "cLeaveRoom",
              "sUserLeftRoom",
              "cKickUser",
              "sUserKicked",
              "cBanUser",
              "sUserBanned",
              "cReadyState",
              "sUserReadyState",
              "cStartRun",
              "sHostStart",
              "cRequestRoomList",
              "sRoomList",
              "sDisconnected",
              "sRoomAddToList",
              "cRunOver"
            ]
          }
        },
        fields: {
          cRoomCreate: {
            type: "ClientRoomCreate",
            id: 1
          },
          sRoomCreated: {
            type: "ServerRoomCreated",
            id: 2
          },
          sRoomCreateFailed: {
            type: "ServerRoomCreateFailed",
            id: 3
          },
          cRoomUpdate: {
            type: "ClientRoomUpdate",
            id: 4
          },
          sRoomUpdated: {
            type: "ServerRoomUpdated",
            id: 5
          },
          sRoomUpdateFailed: {
            type: "ServerRoomUpdateFailed",
            id: 6
          },
          cRoomFlagsUpdate: {
            type: "ClientRoomFlagsUpdate",
            id: 7
          },
          sRoomFlagsUpdated: {
            type: "ServerRoomFlagsUpdated",
            id: 8
          },
          sRoomFlagsUpdateFailed: {
            type: "ServerRoomFlagsUpdateFailed",
            id: 9
          },
          cRoomDelete: {
            type: "ClientRoomDelete",
            id: 10
          },
          sRoomDeleted: {
            type: "ServerRoomDeleted",
            id: 11
          },
          cJoinRoom: {
            type: "ClientJoinRoom",
            id: 12
          },
          sJoinRoomSuccess: {
            type: "ServerJoinRoomSuccess",
            id: 13
          },
          sJoinRoomFailed: {
            type: "ServerJoinRoomFailed",
            id: 14
          },
          sUserJoinedRoom: {
            type: "ServerUserJoinedRoom",
            id: 15
          },
          cLeaveRoom: {
            type: "ClientLeaveRoom",
            id: 16
          },
          sUserLeftRoom: {
            type: "ServerUserLeftRoom",
            id: 17
          },
          cKickUser: {
            type: "ClientKickUser",
            id: 18
          },
          sUserKicked: {
            type: "ServerUserKicked",
            id: 19
          },
          cBanUser: {
            type: "ClientBanUser",
            id: 20
          },
          sUserBanned: {
            type: "ServerUserBanned",
            id: 21
          },
          cReadyState: {
            type: "ClientReadyState",
            id: 22
          },
          sUserReadyState: {
            type: "ServerUserReadyState",
            id: 23
          },
          cStartRun: {
            type: "ClientStartRun",
            id: 24
          },
          sHostStart: {
            type: "ServerHostStart",
            id: 25
          },
          cRequestRoomList: {
            type: "ClientRequestRoomList",
            id: 27
          },
          sRoomList: {
            type: "ServerRoomList",
            id: 28
          },
          sDisconnected: {
            type: "ServerDisconnected",
            id: 31
          },
          sRoomAddToList: {
            type: "ServerRoomAddToList",
            id: 32
          },
          cRunOver: {
            type: "ClientRunOver",
            id: 33
          }
        }
      },
      ClientRunOver: {
        oneofs: {
          _idk: {
            oneof: [
              "idk"
            ]
          }
        },
        fields: {
          idk: {
            type: "bool",
            id: 1,
            options: {
              proto3_optional: true
            }
          }
        }
      },
      ServerDisconnected: {
        fields: {
          reason: {
            type: "string",
            id: 1
          }
        }
      },
      ClientRoomDelete: {
        fields: {
          id: {
            type: "string",
            id: 1
          }
        }
      },
      ServerRoomDeleted: {
        fields: {
          id: {
            type: "string",
            id: 1
          }
        }
      },
      ClientRoomCreate: {
        oneofs: {
          _password: {
            oneof: [
              "password"
            ]
          }
        },
        fields: {
          name: {
            type: "string",
            id: 1
          },
          gamemode: {
            type: "uint32",
            id: 2
          },
          maxUsers: {
            type: "uint32",
            id: 3
          },
          password: {
            type: "string",
            id: 4,
            options: {
              proto3_optional: true
            }
          }
        }
      },
      ServerRoomCreated: {
        oneofs: {
          _password: {
            oneof: [
              "password"
            ]
          }
        },
        fields: {
          id: {
            type: "string",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          },
          gamemode: {
            type: "uint32",
            id: 3
          },
          maxUsers: {
            type: "uint32",
            id: 4
          },
          password: {
            type: "string",
            id: 5,
            options: {
              proto3_optional: true
            }
          },
          locked: {
            type: "bool",
            id: 6
          },
          users: {
            rule: "repeated",
            type: "User",
            id: 7
          }
        },
        nested: {
          User: {
            fields: {
              userId: {
                type: "string",
                id: 1
              },
              name: {
                type: "string",
                id: 2
              },
              ready: {
                type: "bool",
                id: 3
              },
              owner: {
                type: "bool",
                id: 4
              }
            }
          }
        }
      },
      ServerRoomCreateFailed: {
        fields: {
          reason: {
            type: "string",
            id: 1
          }
        }
      },
      ClientRoomUpdate: {
        oneofs: {
          _name: {
            oneof: [
              "name"
            ]
          },
          _gamemode: {
            oneof: [
              "gamemode"
            ]
          },
          _maxUsers: {
            oneof: [
              "maxUsers"
            ]
          },
          _password: {
            oneof: [
              "password"
            ]
          },
          _locked: {
            oneof: [
              "locked"
            ]
          }
        },
        fields: {
          name: {
            type: "string",
            id: 1,
            options: {
              proto3_optional: true
            }
          },
          gamemode: {
            type: "uint32",
            id: 2,
            options: {
              proto3_optional: true
            }
          },
          maxUsers: {
            type: "uint32",
            id: 3,
            options: {
              proto3_optional: true
            }
          },
          password: {
            type: "string",
            id: 4,
            options: {
              proto3_optional: true
            }
          },
          locked: {
            type: "bool",
            id: 5,
            options: {
              proto3_optional: true
            }
          }
        }
      },
      ServerRoomUpdated: {
        oneofs: {
          _name: {
            oneof: [
              "name"
            ]
          },
          _gamemode: {
            oneof: [
              "gamemode"
            ]
          },
          _maxUsers: {
            oneof: [
              "maxUsers"
            ]
          },
          _password: {
            oneof: [
              "password"
            ]
          },
          _locked: {
            oneof: [
              "locked"
            ]
          }
        },
        fields: {
          name: {
            type: "string",
            id: 1,
            options: {
              proto3_optional: true
            }
          },
          gamemode: {
            type: "uint32",
            id: 2,
            options: {
              proto3_optional: true
            }
          },
          maxUsers: {
            type: "uint32",
            id: 3,
            options: {
              proto3_optional: true
            }
          },
          password: {
            type: "string",
            id: 4,
            options: {
              proto3_optional: true
            }
          },
          locked: {
            type: "bool",
            id: 5,
            options: {
              proto3_optional: true
            }
          }
        }
      },
      ServerRoomUpdateFailed: {
        fields: {
          reason: {
            type: "string",
            id: 1
          }
        }
      },
      ClientRoomFlagsUpdate: {
        fields: {
          flags: {
            rule: "repeated",
            type: "GameFlag",
            id: 1
          }
        },
        nested: {
          GameFlag: {
            oneofs: {
              _intVal: {
                oneof: [
                  "intVal"
                ]
              },
              _strVal: {
                oneof: [
                  "strVal"
                ]
              },
              _floatVal: {
                oneof: [
                  "floatVal"
                ]
              },
              _boolVal: {
                oneof: [
                  "boolVal"
                ]
              },
              _uIntVal: {
                oneof: [
                  "uIntVal"
                ]
              }
            },
            fields: {
              flag: {
                type: "string",
                id: 1
              },
              intVal: {
                type: "int32",
                id: 2,
                options: {
                  proto3_optional: true
                }
              },
              strVal: {
                type: "string",
                id: 3,
                options: {
                  proto3_optional: true
                }
              },
              floatVal: {
                type: "float",
                id: 4,
                options: {
                  proto3_optional: true
                }
              },
              boolVal: {
                type: "bool",
                id: 5,
                options: {
                  proto3_optional: true
                }
              },
              uIntVal: {
                type: "uint32",
                id: 6,
                options: {
                  proto3_optional: true
                }
              }
            }
          }
        }
      },
      ServerRoomFlagsUpdated: {
        fields: {
          flags: {
            rule: "repeated",
            type: "GameFlag",
            id: 1
          }
        },
        nested: {
          GameFlag: {
            oneofs: {
              _intVal: {
                oneof: [
                  "intVal"
                ]
              },
              _strVal: {
                oneof: [
                  "strVal"
                ]
              },
              _floatVal: {
                oneof: [
                  "floatVal"
                ]
              },
              _boolVal: {
                oneof: [
                  "boolVal"
                ]
              },
              _uIntVal: {
                oneof: [
                  "uIntVal"
                ]
              }
            },
            fields: {
              flag: {
                type: "string",
                id: 1
              },
              intVal: {
                type: "int32",
                id: 2,
                options: {
                  proto3_optional: true
                }
              },
              strVal: {
                type: "string",
                id: 3,
                options: {
                  proto3_optional: true
                }
              },
              floatVal: {
                type: "float",
                id: 4,
                options: {
                  proto3_optional: true
                }
              },
              boolVal: {
                type: "bool",
                id: 5,
                options: {
                  proto3_optional: true
                }
              },
              uIntVal: {
                type: "uint32",
                id: 6,
                options: {
                  proto3_optional: true
                }
              }
            }
          }
        }
      },
      ServerRoomFlagsUpdateFailed: {
        fields: {
          reason: {
            type: "string",
            id: 1
          }
        }
      },
      ClientJoinRoom: {
        oneofs: {
          _password: {
            oneof: [
              "password"
            ]
          }
        },
        fields: {
          id: {
            type: "string",
            id: 1
          },
          password: {
            type: "string",
            id: 2,
            options: {
              proto3_optional: true
            }
          }
        }
      },
      ServerJoinRoomSuccess: {
        oneofs: {
          _password: {
            oneof: [
              "password"
            ]
          }
        },
        fields: {
          id: {
            type: "string",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          },
          gamemode: {
            type: "uint32",
            id: 3
          },
          maxUsers: {
            type: "uint32",
            id: 4
          },
          password: {
            type: "string",
            id: 5,
            options: {
              proto3_optional: true
            }
          },
          locked: {
            type: "bool",
            id: 6
          },
          users: {
            rule: "repeated",
            type: "User",
            id: 7
          }
        },
        nested: {
          User: {
            fields: {
              userId: {
                type: "string",
                id: 1
              },
              name: {
                type: "string",
                id: 2
              },
              ready: {
                type: "bool",
                id: 3
              },
              owner: {
                type: "bool",
                id: 4
              }
            }
          }
        }
      },
      ServerJoinRoomFailed: {
        fields: {
          reason: {
            type: "string",
            id: 1
          }
        }
      },
      ServerUserJoinedRoom: {
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          }
        }
      },
      ClientLeaveRoom: {
        fields: {
          userId: {
            type: "string",
            id: 1
          }
        }
      },
      ServerUserLeftRoom: {
        fields: {
          userId: {
            type: "string",
            id: 1
          }
        }
      },
      ClientKickUser: {
        fields: {
          userId: {
            type: "string",
            id: 1
          }
        }
      },
      ServerUserKicked: {
        fields: {
          userId: {
            type: "string",
            id: 1
          }
        }
      },
      ClientBanUser: {
        fields: {
          userId: {
            type: "string",
            id: 1
          }
        }
      },
      ServerUserBanned: {
        fields: {
          userId: {
            type: "string",
            id: 1
          }
        }
      },
      ClientReadyState: {
        oneofs: {
          _seed: {
            oneof: [
              "seed"
            ]
          },
          _version: {
            oneof: [
              "version"
            ]
          },
          _beta: {
            oneof: [
              "beta"
            ]
          }
        },
        fields: {
          ready: {
            type: "bool",
            id: 1
          },
          seed: {
            type: "string",
            id: 2,
            options: {
              proto3_optional: true
            }
          },
          mods: {
            rule: "repeated",
            type: "string",
            id: 3
          },
          version: {
            type: "string",
            id: 4,
            options: {
              proto3_optional: true
            }
          },
          beta: {
            type: "bool",
            id: 5,
            options: {
              proto3_optional: true
            }
          }
        }
      },
      ServerUserReadyState: {
        oneofs: {
          _seed: {
            oneof: [
              "seed"
            ]
          },
          _version: {
            oneof: [
              "version"
            ]
          },
          _beta: {
            oneof: [
              "beta"
            ]
          }
        },
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          ready: {
            type: "bool",
            id: 2
          },
          seed: {
            type: "string",
            id: 3,
            options: {
              proto3_optional: true
            }
          },
          mods: {
            rule: "repeated",
            type: "string",
            id: 4
          },
          version: {
            type: "string",
            id: 5,
            options: {
              proto3_optional: true
            }
          },
          beta: {
            type: "bool",
            id: 6,
            options: {
              proto3_optional: true
            }
          }
        }
      },
      ClientStartRun: {
        fields: {
          forced: {
            type: "bool",
            id: 1
          }
        }
      },
      ServerHostStart: {
        fields: {
          forced: {
            type: "bool",
            id: 1
          }
        }
      },
      ClientRequestRoomList: {
        fields: {
          page: {
            type: "uint32",
            id: 1
          }
        }
      },
      ServerRoomList: {
        oneofs: {
          _pages: {
            oneof: [
              "pages"
            ]
          }
        },
        fields: {
          rooms: {
            rule: "repeated",
            type: "Room",
            id: 1
          },
          pages: {
            type: "uint32",
            id: 2,
            options: {
              proto3_optional: true
            }
          }
        },
        nested: {
          Room: {
            fields: {
              id: {
                type: "string",
                id: 1
              },
              name: {
                type: "string",
                id: 2
              },
              gamemode: {
                type: "uint32",
                id: 3
              },
              curUsers: {
                type: "uint32",
                id: 4
              },
              maxUsers: {
                type: "uint32",
                id: 5
              },
              "protected": {
                type: "bool",
                id: 6
              },
              owner: {
                type: "string",
                id: 7
              },
              locked: {
                type: "bool",
                id: 8
              }
            }
          }
        }
      },
      ServerRoomAddToList: {
        fields: {
          room: {
            type: "Room",
            id: 1
          }
        },
        nested: {
          Room: {
            fields: {
              id: {
                type: "string",
                id: 1
              },
              name: {
                type: "string",
                id: 2
              },
              gamemode: {
                type: "uint32",
                id: 3
              },
              curUsers: {
                type: "uint32",
                id: 4
              },
              maxUsers: {
                type: "uint32",
                id: 5
              },
              "protected": {
                type: "bool",
                id: 6
              },
              owner: {
                type: "string",
                id: 7
              },
              locked: {
                type: "bool",
                id: 8
              }
            }
          }
        }
      }
    }
  }
});

export { $root as default };
