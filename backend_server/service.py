import logging
import operations
from jsonrpclib.SimpleJSONRPCServer import SimpleJSONRPCServer

SERVER_HOST = 'localhost'
SERVER_PORT = 4040

logger_format = '%(asctime)s - %(message)s'
logging.basicConfig(format=logger_format)
logger = logging.getLogger('backend_service')
logger.setLevel(logging.DEBUG)

def get_one_news():
  # test 
  LOGGER.debug("getOneNews is called")
  return operations.getOneNews()

def get_news_summaries_for_user(user_id, page_num):
  # Get news summaries for a user 
  LOGGER.debug("get_news_summaries_for_user is called with %s and %s", user_id, page_num)
  return operations.getNewsSummariesForUser(user_id, page_num)


server = SimpleJSONRPCServer((SERVER_HOST, SERVER_PORT))
server.register_function(add, 'add')
logger.info('starting RPC server on %s: %d' SERVER_HOST, SERVER_PORT)

server.serve_forever()