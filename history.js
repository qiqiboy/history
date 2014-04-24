/*!
 * 数据或页面浏览历史记录的javascript实现
 * @author qiqiboy
 * @url http://github.com/qiqiboy/history
 */
;
(function(ROOT, NS, undefined){
    
    function myHistory(name){
        this.storage=new storage(name);
        this.checkSize();
    }

    myHistory.prototype={
        maxSize:10,//历史记录最大数量
        length:0,
        constructor:myHistory,
        //获取键值为id的数据记录
        get:function(id){
            return JSON.parse(this.storage.get(id));
        },
        //增加数据，id作为判断唯一性键值
        add:function(id,obj){
            if(!obj.time){
                obj.time=+new Date;
            }
            this.storage.set(id,JSON.stringify(obj));
            this.checkSize();
        },
        //删除键值为id的数据记录
        remove:function(id){
            this.storage.remove(id);
            this.checkSize();
        },
        //遍历历史记录
        walk:function(func){
            var i=0,j=this.length;
            for(;i<j;i++){
                if(false===func(this.index(i),this.key(i),i))
                    break;
            }
        },
        //清空历史记录
        empty:function(){
            this.storage.clear();
            this.checkSize();
        },
        //获取索引i所对应的键值
        key:function(i){
            return this.orderArray[i];
        },
        //获取索引为i所对应的数据
        index:function(i){
            return this.get(this.key(i));
        },
        //整理数据记录
        checkSize:function(){
            var self=this,
                i=0,j=this.storage.size();
            this.orderArray=[];
            for(;i<j;i++){
                this.orderArray.push(this.storage.key(i));
            }
            this.orderArray.sort(function(k1,k2){
                var v1=self.get(k1),
                    v2=self.get(k2);
                return v1.time<v2.time?1:-1;
            });
            this.length=this.orderArray.length;
            while(this.length>this.maxSize){
                this.remove(this.key(--this.length));
            }
            this.orderArray.length=this.length;
        }
    }

    ROOT[NS]=myHistory;

})(window, 'myHistory');
    
	
