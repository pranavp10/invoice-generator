import { StyleSheet } from '@react-pdf/renderer';

const colors = {
    gray200: '#e5e7eb',
    gray400: '#9ca3af',
    gray500: '#6b7280',
    gray600: '#4b5563',
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
    },
    itemDescription: {
        color: colors.gray600,
        fontSize: 12,
        fontWeight: "medium",
        flexWrap: 'wrap'
    },
    amount: {
        fontSize: 16,
        fontWeight: "medium",
        flexWrap: 'wrap'
    },
    paymentTitle: {
        fontSize: 12,
        fontWeight: "medium",
        flexWrap: 'wrap',
        color: colors.gray500
    }

})

export const pdfUtils = StyleSheet.create({
    flexRowBetween: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    borderTop: { borderTop: `1px solid ${colors.gray200}`, borderTopStyle: 'dashed', },
    borderBottom: { borderBottom: `1px solid ${colors.gray200}`, borderBottomStyle: 'dashed', },
    borderLeft: { borderLeft: `1px solid ${colors.gray200}`, borderLeftStyle: 'dashed', },
    borderRight: { borderRight: `1px solid ${colors.gray200}`, borderRightStyle: 'dashed', },
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
        paddingVertical: 20,
        display: 'flex',
        alignItems: "center",
        flexDirection: 'row',
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


