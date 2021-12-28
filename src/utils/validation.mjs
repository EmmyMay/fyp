import validator from 'mongoose-validator'

export  function NameValidator (maxlen = 50, val) {
  return [
    validator({
      validator: 'isLength',
      arguments: [2, maxlen],
      message: 'Name should be between {ARGS[0]} and {ARGS[1]} characters'
    }),

    validator({
      validator: 'isAlphanumeric',
      passIfEmpty: true,
      message: 'Name should contain alpha-numeric characters only',
    })
  ]

}

export function EnumValidator  (){
  return validator({
    validator: 'isIn',
    arguments: ['Power Engineering', 'Control Engineering', 'Telecommunications Engineering'],
    message: 'You have to choose one of the provided options'
  })

}

export function EmailValidator (){
  return validator({
    validator: 'isEmail',
    message: "You have to provide a valid email address"
  })
}

export function PhoneValidator () {

  validator({
    validator: 'isMobilePhone',
    message: 'Please provide a valid phone number',
  })

}