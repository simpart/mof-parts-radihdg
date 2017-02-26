/**
 * @file   radihdg.js
 * @author simpart
 */
require('mofron-comp-heading');
require('mofron-comp-text');
require('mofron-effect-radius');

mofron.comp.heading.Radius = class extends mofron.comp.Heading {
    
    constructor (prm_opt) {
        try {
            super();
            this.name('Radius');
            
            this.prmOpt(prm_opt);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initDomConts(prm) {
        try {
            var text = null;
            if ('string' === typeof prm) {
                text = new mofron.comp.Text(prm);
            } else {
                text = prm;
            }
            
            super.initDomConts(text);
            
            /* set color */
            var clr = this.theme().getColor(0);
            if (null !== clr) {
                this.color(clr);
            }
            
            /* set style */
            this.style('width'        , '95%');
            this.style('margin'       , '0 auto');
            this.style('border-style' , 'solid');
            
            this.align('left');
            this.effect(new mofron.effect.Radius());
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    color (clr) {
        try {
           if (undefined === clr) {
               return mofron.func.getColor(this.style('border-color'));
           }
           if ((null !== clr) && ('object' !== typeof clr)) {
               throw new Error('invalid parameter');
           }
           this.style('border-color' , clr.getStyle());
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    align (type) {
        try {
            if (undefined === type) {
                return this.child()[0].style('text-align');
            }
            if ('string' !== typeof type) {
                throw new Error('invalid parameter');
            }
            
            if ('left' === type) {
                this.style('border-width' , '1px 1px 1px 10px');
                this.child()[0].style('margin-left', '20px');
            } else if ('center' === type) {
                this.style('border-width' , '1px 10px 1px 10px');
            } else if ('right'  === type) {
                this.style('border-width' , '1px 10px 1px 1px');
                this.child()[chd.length-1].style('margin-right', '20px');
            } else {
                throw new Error('invalid parameter');
            }
            this.child()[0].style('text-align', type);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.heading.Radius;
