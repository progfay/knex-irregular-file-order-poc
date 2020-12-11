module.exports = {
  client: 'pg',
  seeds: {
    sortDirsSeparately: true,
		recursive: true,
    directory: [
      './seeds',
    ]
  }
}
