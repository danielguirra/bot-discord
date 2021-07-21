module.exports = {
    name: 'cls',
    discription: 'Clean channel 99 message max',
    execute(message, args)
    {
            message.delete();
            if (!isNaN(Number(args))) {
              message.channel.bulkDelete(1);
              message.channel.bulkDelete(args);
            }
          }
    }
