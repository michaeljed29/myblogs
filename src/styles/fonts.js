import MontserratRegularttf from './fontFace/Montserrat-Regular.ttf'
import MontserratItalicttf from './fontFace/Montserrat-Italic.ttf'
import MontserratMediumttf from './fontFace/Montserrat-Medium.ttf'
import MontserratSemiBoldttf from './fontFace/Montserrat-SemiBold.ttf'
import MontserratBoldttf from './fontFace/Montserrat-Bold.ttf'
import FugazOneRegularttf from './fontFace/FugazOne-Regular.ttf'

export const primaryFont = 'Montserrat'
export const logoFont = 'Fugaz One'

export const MontserratRegular = {
	fontFamily: primaryFont,
	fontStyle: 'normal',
	fontDisplay: 'swap',
	fontWeight: 400,
	src: `
    local(${primaryFont}),
    local(${primaryFont + '-Regular'}),
    url(${MontserratRegularttf}) format('ttf')
  `,
	unicodeRange:
		'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
}

export const MontserratItalic = {
	fontFamily: primaryFont,
	fontStyle: 'italic',
	fontDisplay: 'swap',
	fontWeight: 400,
	src: `
    local(${primaryFont}),
    local(${primaryFont + '-Italic'}),
    url(${MontserratItalicttf}) format('ttf')
  `,
	unicodeRange:
		'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
}

export const MontserratMedium = {
	fontFamily: primaryFont,
	fontStyle: 'normal',
	fontDisplay: 'swap',
	fontWeight: 500,
	src: `
    local(${primaryFont}),
    local(${primaryFont + '-Medium'}),
    url(${MontserratMediumttf}) format('ttf')
  `,
	unicodeRange:
		'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
}

export const MontserratSemiBold = {
	fontFamily: primaryFont,
	fontStyle: 'normal',
	fontDisplay: 'swap',
	fontWeight: 600,
	src: `
    local(${primaryFont}),
    local(${primaryFont + '-SemiBold'}),
    url(${MontserratSemiBoldttf}) format('ttf')
  `,
	unicodeRange:
		'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
}

export const MontserratBold = {
	fontFamily: primaryFont,
	fontStyle: 'normal',
	fontDisplay: 'swap',
	fontWeight: 700,
	src: `
    local(${primaryFont}),
    local(${primaryFont + '-Bold'}),
    url(${MontserratBoldttf}) format('ttf')
  `,
	unicodeRange:
		'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
}

export const FugazOneRegular = {
	fontFamily: logoFont,
	fontStyle: 'normal',
	fontDisplay: 'swap',
	fontWeight: 400,
	src: `
    local(${logoFont}),
    local(${logoFont + '-Regular'}),
    url(${FugazOneRegularttf}) format('ttf')
  `,
	unicodeRange:
		'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
}
