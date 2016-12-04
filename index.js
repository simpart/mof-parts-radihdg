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
            frame.radius(30);
            frame.addLayout(new mofron.layout.Margin('left',30));
            this.addChild(frame, true, this.getVdom());
            
            super.initContents(this.getTarget(), prm);
            this.marginLeft(30);
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
