import logging

from jsonrpclib.SimpleJSONRPCServer import SimpleJSONRPCServer

SERVER_HOST = 'localhost'
SERVER_PORT = 4040

logger_format = '%(asctime)s - %(message)s'
logging.basicConfig(format=logger_format)
logger = logging.getLogger('backend_service')
logger.setLevel(logging.DEBUG)

def add(num1, num2):
  """TEST METHOD"""
  logger.debug('add is called with %d and %d', num1, num2)
  return num1 + num2

server = SimpleJSONRPCServer((SERVER_HOST, SERVER_PORT))
server.register_function(add, 'add')
logger.info('starting RPC server on %s: %d' SERVER_HOST, SERVER_PORT)

server.serve_forever()