const linksSocialMedia = {
  github: 'JairNeto1',
  youtube: 'channel/UCi0iB18elLslyDnjHKX_Cjg',
  facebook: '',
  instagram: 'jairmonteiro.neto',
  twitter: 'JairMonteiro'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    console.log(li.children[0].href)
  }
}

changeSocialMediaLinks()
