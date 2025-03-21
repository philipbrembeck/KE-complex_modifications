// JavaScript should be written in ECMAScript 5.1.

function main() {
  console.log(
    JSON.stringify(
      {
        title: 'Double-tap play/pause to skip track',
        "maintainers": [
          "yarinkaul"
        ],
        rules: [
          {
            "description": "Double-tap play/pause to skip track",
            "manipulators": [
              {
                "conditions": [
                  {
                    "name": "play-pause-count",
                    "type": "variable_if",
                    "value": 1
                  }
                ],
                "from": {
                  "key_code": "vk_consumer_play"
                },
                "to": [
                  {
                    "key_code": "vk_consumer_next"
                  }
                ],
                "type": "basic"
              },
              {
                "from": {
                  "key_code": "vk_consumer_play"
                },
                "to": [
                  {
                    "set_variable": {
                      "name": "play-pause-count",
                      "value": 1
                    }
                  }
                ],
                "to_delayed_action": {
                  "to_if_canceled": [
                    {
                      "set_variable": {
                        "name": "play-pause-count",
                        "value": 0
                      }
                    },
                    {
                      "key_code": "vk_consumer_next"
                    }
                  ],
                  "to_if_invoked": [
                    {
                      "set_variable": {
                        "name": "play-pause-count",
                        "value": 0
                      }
                    }
                  ]
                },
                "type": "basic"
              }
            ]
          }
        ],
      },
      null,
      '  '
    )
  )
}

main()
