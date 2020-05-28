const eventEmitter = {
  list: [],
  on: function( key, fn ){
    if ( !this.list[ key ] ){
      this.list[ key ] = [];
    }
    this.list[ key ].push( fn );
  },
  emit: function(){
    const key = Array.prototype.shift.call( arguments ),
      fns = this.list[ key ];

    if ( !fns || fns.length === 0 ){
      return false;
    }

    for( let i = 0; i<fns.length; i++ ){
      fns[i].apply( this, arguments );
    }
  },
  remove : function( key, fn ){
    const fns = this.list[ key ];

    if ( !fns ){
      return false;
    }
    if ( !fn ){
      fns && ( fns.length = 0 );
    }else{
      for ( let l = fns.length - 1; l >=0; l-- ){
        let _fn = fns[ l ];
        if ( _fn === fn ){
          fns.splice( l, 1 );
        }
      }
    }
  }
};

function user1 (content) {
  console.log('用户1订阅了:', content);
}

function user2 (content) {
  console.log('用户2订阅了:', content);
}

eventEmitter.on("订阅事件A",user1);
eventEmitter.on("订阅事件A",user2);

eventEmitter.emit("订阅事件A","哈哈");

eventEmitter.remove("订阅事件A",user1);

eventEmitter.emit("订阅事件A","哈哈2");

