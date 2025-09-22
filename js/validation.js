let validation = new JustValidate('#forma', {
  errorLabelStyle: {
    // position: 'absolute',
    marginTop: '5px',
    color: 'var(--error-color)',
    fontSize: '14px',
  },
})
validation
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'This field is required',
    },
    {
      rule: 'email',
      errorMessage: 'Invalid email',
    },
  ])

  .onSuccess(() => {
    document.querySelector('#email').value = ''
  })
