const orderSchema=new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users',required: true
          },
          products: [
            {
              product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'products',required: true},
              quantity: {type: Number,required: true}
            }
          ],
          totalPrice: {type: Number,required: true},
          orderDate: {type: Date,default: Date.now}
    }
)
module.exports =mongoose.model('order', orderSchema);