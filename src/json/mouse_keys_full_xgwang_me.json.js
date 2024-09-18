// JavaScript should be written in ECMAScript 5.1.

function main() {
  console.log(
    JSON.stringify(
      {
        title: 'Mouse keys (xgwang.me)',
        rules: [
          {
            description: 'Mouse keys (xgwang.me)',
            manipulators: [
              //
              // Disable mouse_keys_full by pressing right_command is released
              //

              {
                type: 'basic',
                from: { key_code: 'right_command', modifiers: { mandatory: ['left_command'], optional: ['any'] } },
                to: [{ key_code: 'right_command' }],
                to_after_key_up: [{ set_variable: { name: 'mouse_keys_full', value: 0 } }],
                conditions: [{ type: 'variable_if', name: 'mouse_keys_full', value: 1 }],
              },

              //
              // Enable mouse_keys_full by pressing right_command
              //

              {
                type: 'basic',
                from: { key_code: 'right_command', modifiers: { mandatory: ['left_command'], optional: ['any'] } },
                to: [{ key_code: 'right_command' }],
                to_after_key_up: [{ set_variable: { name: 'mouse_keys_full', value: 1 } }],
                conditions: [{ type: 'variable_if', name: 'mouse_keys_full', value: 0 }],
              },

              //
              // mouse_keys
              //

              // scroll

              {
                type: 'basic',
                from: { key_code: 'h', modifiers: { optional: ['any'] } },
                to: [{ mouse_key: { horizontal_wheel: 32 } }],
                conditions: [
                  { type: 'variable_if', name: 'mouse_keys_full', value: 1 },
                  { type: 'variable_if', name: 'mouse_keys_full_scroll', value: 1 },
                ],
              },
              {
                type: 'basic',
                from: { key_code: 'j', modifiers: { optional: ['any'] } },
                to: [{ mouse_key: { vertical_wheel: 32 } }],
                conditions: [
                  { type: 'variable_if', name: 'mouse_keys_full', value: 1 },
                  { type: 'variable_if', name: 'mouse_keys_full_scroll', value: 1 },
                ],
              },
              {
                type: 'basic',
                from: { key_code: 'k', modifiers: { optional: ['any'] } },
                to: [{ mouse_key: { vertical_wheel: -32 } }],
                conditions: [
                  { type: 'variable_if', name: 'mouse_keys_full', value: 1 },
                  { type: 'variable_if', name: 'mouse_keys_full_scroll', value: 1 },
                ],
              },
              {
                type: 'basic',
                from: { key_code: 'l', modifiers: { optional: ['any'] } },
                to: [{ mouse_key: { horizontal_wheel: -32 } }],
                conditions: [
                  { type: 'variable_if', name: 'mouse_keys_full', value: 1 },
                  { type: 'variable_if', name: 'mouse_keys_full_scroll', value: 1 },
                ],
              },

              // normal

              {
                type: 'basic',
                from: { key_code: 'h', modifiers: { optional: ['any'] } },
                to: [{ mouse_key: { x: -1536 } }],
                conditions: [{ type: 'variable_if', name: 'mouse_keys_full', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: 'j', modifiers: { optional: ['any'] } },
                to: [{ mouse_key: { y: 1536 } }],
                conditions: [{ type: 'variable_if', name: 'mouse_keys_full', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: 'k', modifiers: { optional: ['any'] } },
                to: [{ mouse_key: { y: -1536 } }],
                conditions: [{ type: 'variable_if', name: 'mouse_keys_full', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: 'l', modifiers: { optional: ['any'] } },
                to: [{ mouse_key: { x: 1536 } }],
                conditions: [{ type: 'variable_if', name: 'mouse_keys_full', value: 1 }],
              },

              // buttons

              {
                type: 'basic',
                from: { key_code: 'v', modifiers: { optional: ['any'] } },
                to: [{ pointing_button: 'button1' }],
                conditions: [{ type: 'variable_if', name: 'mouse_keys_full', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: 'b', modifiers: { optional: ['any'] } },
                to: [{ pointing_button: 'button3' }],
                conditions: [{ type: 'variable_if', name: 'mouse_keys_full', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: 'n', modifiers: { optional: ['any'] } },
                to: [{ pointing_button: 'button2' }],
                conditions: [{ type: 'variable_if', name: 'mouse_keys_full', value: 1 }],
              },

              // controls

              {
                type: 'basic',
                from: { key_code: 'f', modifiers: { optional: ['any'] } },
                to: [{ mouse_key: { speed_multiplier: 2.0 } }],
                conditions: [{ type: 'variable_if', name: 'mouse_keys_full', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: 'd', modifiers: { optional: ['any'] } },
                to: [{ mouse_key: { speed_multiplier: 0.5 } }],
                conditions: [{ type: 'variable_if', name: 'mouse_keys_full', value: 1 }],
              },
              {
                type: 'basic',
                from: { key_code: 's', modifiers: { optional: ['any'] } },
                to: [{ set_variable: { name: 'mouse_keys_full_scroll', value: 1 } }],
                to_after_key_up: [{ set_variable: { name: 'mouse_keys_full_scroll', value: 0 } }],
                conditions: [{ type: 'variable_if', name: 'mouse_keys_full', value: 1 }],
              },
            ],
          },
        ],
      },
      null,
      '  '
    )
  )
}

main()
