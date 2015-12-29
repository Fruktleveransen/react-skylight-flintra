
module.exports = {
    overlayStyles: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 99,
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    dialogStyles: {
        backgroundColor: '#fff',
        zIndex: 100,
        padding: '1.875rem',
        boxShadow: '0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28)',

        position:      'absolute',
        width:         '80%',
        height:        'auto',
        top:           '80px',
        left:          '10%',
        margin:        '0 0 20px',
        borderRadius:  '3px'
    },
    closeButtonStyle: {
        cursor: 'pointer',
        float: 'right',
        fontSize: '1.6em',
        margin: '-15px 0'
    },
    sectionStyles: {
         display: 'none',
         position: 'fixed',
         left: '0',
         top: '0',
         width: '100%',
         height: '100%',
         overflowY: 'scroll',
         zIndex: 1
   }
};
