import { StyleSheet } from '@react-pdf/renderer';

const colors = {
    gray400: '#9ca3af',
    'gray550/900': 'rgb(115 115 115 / 0.9)'
}

export const pdfTypography = StyleSheet.create({
    title: {
        fontSize: 11,
        fontWeight: "semibold",
        textTransform: "uppercase",
        color: colors.gray400
    },
    subTitle: {
        fontSize: 12,
        fontWeight: "medium",
    },
    text2xl: {
        fontSize: 24,
        fontWeight: 'medium'
    },
    description: {
        color: colors['gray550/900'],
        fontSize: 12
    }
})

export const pdfUtils = StyleSheet.create({
    flexRowBetween: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    flexRowItemCenter: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
    },
    flexRowItemSpaceAround: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    flexColBetween: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
    },
})

export const pdfContainers = StyleSheet.create({
    page: {
        fontFamily: "Geist",
    },
    invoiceTerms: {
        paddingHorizontal: 40,
        paddingTop: 30,
        paddingBottom: 16,
        display: 'flex',
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: 'row',
        flex: 1
    },
    YourDetails: {
        paddingHorizontal: 40,
        paddingVertical: 16,
        flex: 1
    },
    CompanyDetails: {
        paddingHorizontal: 40,
        paddingVertical: 16,
        flex: 1
    },
    imageContainer: {
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        height: 40,
        marginBottom: 12,
    }
})


