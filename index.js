/**
 * @file   Radihdg.js
 * @author simpart
 */

mofron.parts.Radihdg = class extends mofron.parts.Heading {
    getTarget () {
        try {
            return this.getChild(0).getTarget();
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initContents(vd,prm) {
        try {
            var frame = new mofron.parts.Frame();
            frame.style('width'       , '100%');
            frame.style('height'      , null);
            frame.style('border-width', '1px 1px 1px 10px');
            
            if (undefined != mofron.theme) {
                var clr = mofron.theme.getColor(0);
                if (null !== clr) {
                    frame.style('border-color', clr.getStyle());
                }
            }
            
            frame.radius(30);
            frame.addLayout(new mofron.layout.Margin('left',30));
            frame.addChild(new mofron.parts.Heading(prm[0], prm[1]));
            this.addChild(frame, true, this.getVdom());
            
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    marginLeft (val) {
        try {
            var _val = (val === undefined) ? null : val;
            if (null === _val) {
                return this.getTarget().getChild(0).getStyle('margin-left');
            }
            if ('number' !== (typeof _val)) {
                throw new Error('invalid parameter');
            }
            this.getTarget().getChild(0).setStyle('margin-left', val + 'px');
            this.getChild(0).getLayout(0).value(val);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
